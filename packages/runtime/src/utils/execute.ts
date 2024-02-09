/**
 * This is how we execute the bundle.
 * This is much safer than using eval. As we can use the Function constructor to create a function from a string.
 * This is safer because the function is created in a new scope. So it cannot access the variables in the current scope.
 */

import { NanoAppLibraries } from "@types";
import { requireOverload } from "./require";

/**
 * Executes the nanoapp code.
 * 
 * @param code The code for the nanoapp.
 * @param dynamicLibraries The dynamic libraries that the nanoapp will use.
 * @returns The nanoapp.
 */
export const execute = (code: string, dynamicLibraries: NanoAppLibraries) => {
  // This is how we create a function from a string.
  // This is where we are overriding the `require` and `exports` functions.
  // This is what gives us control to inject dependencies
  const executeNanoApp = new Function("require", "exports", "module", code);
  // This is how we extract the exported code from the function
  const module = { exports: {} };
  // We are now running the newly created function.
  executeNanoApp(requireOverload(dynamicLibraries), module.exports, module);
  // We are getting the correct exports based upon the module.
  return "default" in module?.exports
    ? module?.exports?.default
    : module.exports;
};
