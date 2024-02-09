/**
 * Used to create a list of external dependencies, based upon the
 * library used in the package.json
 */

import { getDeps } from "./getDeps";

/**
 * Gets the external dependencies for the nanoapp, based upon the
 * dependencies in the package.json.
 * 
 * @returns The external dependencies for the nanoapp.
 */
export const getExternals = (): string[] => {
  const deps = getDeps();

  switch (true) {
    case deps.includes("svelte"):
      return ["svelte"];
    case deps.includes("vue"):
      return ["vue"];
    case deps.includes("react"):
    default:
      return [
        "react",
        "react-dom",
        "clone-or-create",
        "prop-types",
        "react-lottie",
      ];
  }
};
