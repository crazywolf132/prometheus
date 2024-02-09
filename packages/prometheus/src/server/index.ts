
import { logMiddleware } from '@utils';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { shaMiddleware } from './sha';

type ServerOptions = {
    /** Whether to use an `apps` folder to serve apps or not. */
    fullServer: boolean;
    /** Location of the miniapp to serve when not in full mode. */
    nanoapp: string;
}

const makeServer = (options: ServerOptions): express.Application => {

    // Creating the express server.
    // TODO(brayden): Could use a better server for this at some point.
    const app = express();
    // Adding the json middleware to the server.
    app.use(express.json())
    // Adding our custom logger to the server.
    app.use(logMiddleware())
    // Adding basic cors, to allow the shells and nanoapps to talk with the server.
    app.use(cors())
    // Removing the `204` status code from the server.
    app.disable("etag")
    // Adding the sha middleware to the server. -- Generates a SHA for each bundle.
    app.use(shaMiddleware);
    // Adding the helmet middleware to the server. -- Removes server identification information.
    // This helps with security. Especially if this is in prod.
    app.use(helmet())

    // Adding the bundles route to the server.
    app.get('/bundles/:nanoApp', async (req, res) => {
        
        // Extracting the nanoapp from the URL request.
        const { nanoApp } = req.params;

        // If we are in full server mode, we will serve the nanoapp from the `apps` folder.
        if (options.fullServer) {
            // We are going to check to see if the file exists in the folder.
            // If it does, we will serve it.
            if (existsSync(join(process.cwd(), "apps", `${nanoApp}.bundle.js`))) {
                // Seeing as the file exists, we are going to serve it.
                return res.json({
                    // Reading the file as a string and sending it to the client.
                    code: readFileSync(join(process.cwd(), "apps", `${nanoApp}.bundle.js`), { encoding: 'utf-8' }),
                    // This will be filled in by the sha middleware.
                    sha: ""
                });
            } else {
                // We could not find the file, so we are returning a `404` status code.
                return res.sendStatus(404)
            }
        } else {
            // We are checking that the nanoapp exists in the local directory.
            if (options.nanoapp !== "" && existsSync(join(process.cwd(), options.nanoapp))) {
                // Seeing as the file exists, we are going to serve it.
                return res.json({
                    // Reading the file as a string and sending it to the client.
                    code: readFileSync(join(process.cwd(), options.nanoapp), { encoding: 'utf-8' }),
                    // This will be filled in by the sha middleware.
                    sha: ""
                });
            } else {
                // We could not find the file, so we are returning a `404` status code.
                return res.sendStatus(404);
            }
        }
    })

    // Returning the raw express server.
    // This allows for the developer to do more with the server if they need to.
    return app;
}

export default makeServer;