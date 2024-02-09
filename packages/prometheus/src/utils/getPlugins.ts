
import { svelte } from "@sveltejs/vite-plugin-svelte";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import { getDeps } from "./getDeps";

/**
 * Used to return the correct plugins for the platform of the nanoapp
 */
export const getPlugins = () => {
  // Reading the package.json
  const deps = getDeps();

  switch (true) {
    case deps.includes("svelte"):
      return [svelte()];
    case deps.includes("vue"):
      return [vue()];
    case deps.includes("react"):
    default:
      return [react()];
  }
};
