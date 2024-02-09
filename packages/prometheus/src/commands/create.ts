/**
 * We use this to create a nanoapp / shell.
 * 
 * We will ask the user questions to then generate the nanoapp / shell for them.
 * We will also allow for the user to run this command again from inside a nanoapp / shell to add more things.
 */

import type { Command } from "@types";
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "path";
import { react_app, react_main, script_build, script_dev, script_local, svelte_app, svelte_main, tsconfig, vue_app, vue_main } from "../constants/fileFills";

interface CreateOptions {
    name: string;
    library: "react" | "vue" | "svelte";
}

export default {
    name: "create",
    options: [
        ['-n, --name <name>', 'The name of the nanoapp or shell', '', true],
        ['-l, --library <library>', 'The library to use for the nanoapp or shell (react, vite or svelte)', 'react', true],
    ],
    description: "create a new nanoapp or shell",
    action: async ({ name: packageName, library}: CreateOptions) => {

        if (packageName === "" || String(library) === "") {
            throw new Error("Please define the name and library of the nanoapp or shell");
        }
        

        execSync(`mkdir -p ./${packageName}/src; cd ${packageName}; yarn init -y;`);

        switch (library) {
            case "react":
                execSync(`touch ./${packageName}/src/{main,App}.tsx`);
                writeFile(packageName, "main.tsx", react_main)
                writeFile(packageName, "App.tsx", react_app)
                break;
            case 'vue':
                execSync(`touch ./${packageName}/src/{main.ts,App.vue}`);
                writeFile(packageName, "main.ts", vue_main)
                writeFile(packageName, "App.vue", vue_app)
                break;
            case 'svelte':
                execSync(`touch ./${packageName}/src/{main.ts,App.svelte}`);
                writeFile(packageName, "main.ts", svelte_main)
                writeFile(packageName, "App.svelte", svelte_app)
                break;
        }
        // Being lazy and reusing the src function, just exiting the src.
        writeFile(packageName, "../tsconfig.json", tsconfig);

        // We are going to read the pkg.json file and modify the scripts, main, and files fields.
        const pkg = JSON.parse(readFileSync(join(process.cwd(), packageName, 'package.json'), 'utf-8'));
        pkg.files = ["dist"];
        pkg.main = "dist/main.umd.cjs";
        pkg.type = "module";
        pkg.scripts = {
            "dev": script_dev(packageName),
            "build": script_build(packageName),
            "local": script_local(packageName),
        }
        pkg.devDependencies = {
            "@local/prometheus": "*",
            "typescript": "latest",
            ...(pkg.devDependencies || {}),
        }
        pkg.dependencies = {
            [library]: "latest",
            ...(pkg.dependencies || {}),
        }

        writeFileSync(join(process.cwd(), packageName, 'package.json'), JSON.stringify(pkg, null, 2), 'utf-8');


    }
} as Command

const writeFile = (pkg: string, fileName: string, content: string) => {
    writeFileSync(join(process.cwd(), pkg, 'src', fileName), content, 'utf-8');
}