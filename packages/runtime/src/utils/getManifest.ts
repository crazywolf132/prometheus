import { NanoAppManifest } from "@types";

/**
 * Method to call the server and get the manifest.
 * We will just return the manifest type.
 */
export const getManifest = async (
  location: string,
): Promise<NanoAppManifest> => {
  try {
    // Requesting the manifest from the server.
    const response = await fetch(`${location}/manifest`);
    // If there is an error, we will stop everything here.
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    // We are going to return the manifest.
    const manifest = await response.json();
    return manifest;
  } catch (error) {
    console.error(`Error fetching manifest: ${(error as Error).message}`);
    throw error;
  }
};
