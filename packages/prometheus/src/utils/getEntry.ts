/**
 * Used to get the package entry file based upon the framework
 * being used.
 */

import { getDeps } from "./getDeps";

/**
 * Gets the entry file for the nanoapp, based upon the
 * dependencies in the package.json.
 * 
 * @returns The entry file for the nanoapp.
 */
export const getEntry = (): string => {
  const deps = getDeps();

  switch (true) {
    case deps.includes("svelte"):
    case deps.includes("vue"):
      return "src/main.ts";
    case deps.includes("react"):
    default:
      return "src/main.tsx";
  }
};
