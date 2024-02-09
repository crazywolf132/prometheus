/**
 * This allows for an engineer to run their own local server that the nano-apps will be run from.
 * This will just run in their local directory.
 * 
 * There will be an option for either a full server, which will allow for multiple nanoapps to be served from
 * or instead, a single nanoapp server which will just server the local nanoapp.
 */

import server from '@server';
import { Command } from "@types";
import log from 'volog';

type Options = {
    /** Whether this is a full server implementation (multi-app) */
    full: boolean;
}

export default {
    name: "server",
    description: "Start a local server for the nano-apps",
    options: [
        ["-f, --full", "Starts a full server", true]
    ],
    arguments: [
        ['<bundleLocation>', 'The location of the bundle to serve']
    ],
    action: async (bundleLocation: string = "", args: Options = {full: true}) => {
        // The `bundleLocation` is required for a basic server to run (single-app).
        // These are the options that will be used to instantiate the server.
        const serverOptions = {nanoapp: bundleLocation, fullServer: args.full};
        // Creating a logger that is scoped to the server, to help identify the logs.
        log.settings.scope = 'SERVER';
        // Letting the developer know we have started the server and what options we are using.
        log.info("Starting server", 'options', JSON.stringify(serverOptions), 'port', 5000)
        // Starting the server.
        server(serverOptions).listen(5000)
    }
} as Command;