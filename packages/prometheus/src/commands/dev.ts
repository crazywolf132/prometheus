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
import { sep } from "node:path";
import { createServer } from "vite";
import log from 'volog';
import build from "./build";
import localServer from './server';

export default {
    name: "dev",
    description: "Start a development server for a single nano-app",
    action: async (args: any) => {

        let name = "development";

        // Starting the server so it is ready by the time the page loads
        localServer.action("dist/main.umd.cjs", { full: false});
        
        const foundShell = hasShell();
        let external = !foundShell;
        log.info("Development mode starting", "has shell?", foundShell)
        let basePath = execSync(`node -e "console.log(require.resolve('@prometheus/env'))"`, { encoding: 'utf-8' }).trim().split(sep).slice(0, -2).join(sep);
        log.info("Base path", "location", basePath)

        // Seeing as we are using yarn in this repo, we will create a `.prometheus` folder which will have the shell code.
        // This will allow us to use the shell code from the local project.
        if (!foundShell) {
            // We are going to copy everything from the basePath to the `.prometheus` folder.
            // Going to delete the `.prometheus` folder
            try { fs.rmSync(".prometheus", { recursive: true }); } catch {}
            fs.mkdirSync(".prometheus/dist", { recursive: true });
            fs.mkdirSync(".prometheus/public/assets", { recursive: true });
            fs.copyFileSync(`${basePath}/index.html`, ".prometheus/index.html");
            fs.copyFileSync(`${basePath}/src/main.tsx`, ".prometheus/dist/shell.tsx");
            fs.copyFileSync(`${basePath}/src/Spinner.tsx`, ".prometheus/dist/Spinner.tsx");
            fs.copyFileSync(`${basePath}/public/assets/spinner.gif`, ".prometheus/public/assets/spinner.gif");
            basePath = ".prometheus";
        }

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