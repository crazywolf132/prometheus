/**
 * Used to get the package dependencies from the closest package.json
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Gets the dependencies from the package.json
 * This includes:
 * - dependencies
 * - devDependencies
 * - peerDependencies
 * @returns The dependencies from the package.json
 */
export const getDeps = (): string[] => {
  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), "package.json"), "utf8"),
  );

  const deps = [
    ...new Set([
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.devDependencies ?? {}),
      ...Object.keys(pkg.peerDependencies ?? {}),
    ]),
  ];

  return deps;
};
