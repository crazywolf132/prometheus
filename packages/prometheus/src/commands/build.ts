import fs from 'node:fs';
import { join } from 'node:path';
import { build } from "vite";

import { commonConfig } from "@consts";
import type { Command } from "@types";
import { getEntry, getExternals, getPlugins } from "@utils";

type IArgs = {
  /** Marks the build to externalize the framework dependencies */
  external: boolean;
  /** Tells the build system to look for a local server to update once built. */
  local: boolean;
  /** REQUIRED. Tells the build system what to call the app. */
  name: string;
};

export default {
  name: "build",
  description: "Builds the nanoapps for the prometheus system",
  options: [
    ["-e, --external", "Builds the nanoapp for external use", false],
    ["-l, --local", "Builds the nanoapp for local use", false],
    ['-n, --name <name>', 'name of the application', "", true]
  ],
  action: async (options: IArgs) => {
    let { external = false, local = false, name } = options ?? {};
    // If there is no name... we assume this is because the `action` is being
    // called from inside the `action` of a another command (like dev)
    if (!name) {
      name = "development"
    }

    // These are the base dependencies that we want to externalize.
    const toExternalize: string[] = [
      "__root",
      "@internal",
      "@prometheus/runtime",
    ];
    // If we are marking the build as external, we need to add the external
    // dependencies to the list of things to externalize.
    // This will be based on the platform of the nanoapp that we detect.
    if (external) {
      toExternalize.push(...getExternals());
    }

    // Getting the plugins for the build. This is based on the platform detected.
    const plugins = getPlugins();
    // Getting the entry for the nanoapp. We base this too on the platform.
    const entry = getEntry();

    // Starting the actual build task.
    await build(
      // We have a common config that is used for both `dev` and `build`.
      // So we are going to call that and provide it with our specific configurations.
      commonConfig({
        name, // Name of the app
        entry, // Location of the entry
        plugins, // The plugins for building
        externals: toExternalize, // The list of things to externalize
      }),
    );

    // If we are either local or not in production, we are going to send the
    // final bundle to a local server and update its bundle code.
    if (local || process.env.NODE_ENV != "production") {
      // We are going to send the bundle the local server.
      fetch("http://localhost:5000/upload", {
        method: "POST", // The `upload` route only accepts POST's
        headers: {
          "Content-Type": "application/json", // Telling it we are sending JSON
        },
        "body": JSON.stringify({
          name, // Name of the app, which will be put into the following template: `{name}.bundle.js`.
          // We are reading the bundle file as a string and sending it to the server.
          code: await fs.promises.readFile(join(process.cwd(), "dist", "main.umd.cjs"), "utf-8"),
        }),
      })
    }
  },
} as Command;
