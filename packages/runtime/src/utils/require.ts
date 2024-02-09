import { NanoAppLibraries } from "@types";

/**
 * This is the super dooper amazing (not really lol) require overload function.
 * It will take a list of `dynamicLibraries` and if the module is in that list, it will return it.
 * Otherwise we have fallback to the regular `require` function.
 * 
 * This allows for us to inject libraries like `react` and `vue` into the nanoapp.
 * This allows for us to have a single version of these libraries present in the environment.
 */

/**
 * Overloads the require function to first check the `dynamicLibraries` object for the module.
 * If it cannot find the module in there, it will then use the regular `require` function.
 * 
 * @param dynamicLibraries - The libraries provided to the nanoapp.
 * @returns (moduleName: string) -> library
 */
export const requireOverload =
  (dynamicLibraries: NanoAppLibraries) =>
  (moduleName: string): any => {
    if (moduleName in dynamicLibraries) {
      return dynamicLibraries[moduleName];
    }

    return require(moduleName);
  };
