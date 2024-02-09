import { getPlatform } from "@utils";
import { OutputBundle, OutputChunk } from "rollup";

/**
 * Used to inject the CSS into the bundle.
 * This will then be handled by the runtime.
 */

export const injectType = () => ({
  name: "injectType",
  enforce: "post",
  apply: "build",
  async generateBundle(_: any, bundle: OutputBundle) {

    const platform = getPlatform();

    // Find the entry chunk to append the styles export
    const entryChunk = Object.values(bundle).find(
      (file): file is OutputChunk => file.type === "chunk" && file.isEntry,
    );
      console.log("ADDING PLATFORM", platform)
    if (entryChunk) {
      entryChunk.code += `\nmodule.exports.platform = \`${platform}\`;`;
    } else {
      console.error("No entry chunk found in the bundle.");
    }
  },
});
