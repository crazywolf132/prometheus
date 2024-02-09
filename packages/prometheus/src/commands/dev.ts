/**
 * The idea of this command is to allow the developer
 * to run a single nano-app without a shell.
 * 
 * We will follow the following rules:
 * 1. We will look to see if there is a `shell/index.tsx` file. This will be used
 * as the entry point for the nano-app.
 * 1.1 If there is not, we will use our own. And we will inject the application into the `app` id.
 * 1.1.1 We will mark the bundle as an `external` bundle.
 * 1.2 If there is, we will allow for the shell to dictate how the application is injected.
 * 1.2.1 We will mark the bundle as an `internal` bundle, meaning it will bring all its deps as its the same project as the shell.
 * 
 * 2. We will start a development server with the root being the nano-app.
 */

import { commonConfig } from "@consts";
import type { Command } from "@types";
import { getEntry, getExternals, getPlugins, hasShell } from "@utils";
import { execSync } from "node:child_process";
import fs from 'node:fs';
import { createServer } from "vite";
import log from 'volog';
import build from "./build";
import localServer from './server';

export default {
    name: "dev",
    description: "Start a development server for a single nano-app",
    action: async (args: any) => {

        let name = "development";
        
        const foundShell = hasShell();
        let external = !foundShell;
        log.info("Development mode starting", "has shell?", foundShell)
        const basePath = execSync(`node -e "console.log(require.resolve('@prometheus/env'))"`, { encoding: 'utf-8' }).trim().split("/").slice(0, -1).join("/");

        const toExternalise: string[] = external ? [
            ...getExternals()
        ] : [];

        const plugins = getPlugins();
        const entry = getEntry();

        const server = await createServer({
            ...commonConfig({
                name, entry, plugins, externals: toExternalise
            }),

            root: foundShell ? process.cwd() : basePath,
        });

        // If we are using the shell from prometheus, we are actually going to spin up a build
        // and a server at the same time.
        build.action("dev", { external: true });
        localServer.action("dist/main.umd.cjs", { full: false});

        await server.listen();
        fs.watch("./src", { recursive: true}, () => {
            (build.action("dev", { external: true }) as Promise<any>).then(() => {
                server.ws.send({
                    type: "full-reload",
                    path: "*"
                })
            })
        })
        server.printUrls();
    }
} as Command