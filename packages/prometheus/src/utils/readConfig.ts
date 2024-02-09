/**
 * This is used for reading the user config file
 * from the nanoapp directory.
 */

import type { UserConfig } from "@types";
import { join } from "node:path";

export const readUserConfig = (): UserConfig => {
    try {
        const userConfig = require(join(process.cwd(), 'prometheus.config.json'));
        return userConfig;
    } catch {
        // We will ignore the error
        return {} as UserConfig;
    }
}