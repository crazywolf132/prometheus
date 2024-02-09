/**
 * Method to call the server and get the bundle.
 * We will just return the bundle type.
 */

import { Bundle } from "@types";

/**
 * Fetches the bundle from the server.
 * 
 * @param url The url of the server.
 * @param bundleName The name of the bundle to fetch.
 * @returns The bundle.
 */
export const fetchBundle = async (
  url: string,
  bundleName: string,
): Promise<Bundle> => {
  // Requesting the bundle from the server.
  // This is where we would update if we wanted to add gateway security.
  const response = await fetch(`${url}/bundles/${bundleName}`);

  // If the response is not ok, we are going to throw an error.
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  // We are going to return the bundle.
  const bundle = await response.json();
  // returning the end bundle.
  return bundle;
};
