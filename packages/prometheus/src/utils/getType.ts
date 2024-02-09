/**
 * Used to return a string of what type of platform this is.
 */

import { getDeps } from "./getDeps";

/**
 * Returns the platform type of the nanoapp
 * 
 * @returns The platform type of the nanoapp
 */
export const getPlatform = (): string => {
    const deps = getDeps();

    switch (true) {
        case deps.includes("svelte"):
            return "svelte";
        case deps.includes("vue"):
            return "vue";
        case deps.includes("react"):
        default:
            return "react";
    }
}