import { OutputAsset, OutputBundle, OutputChunk } from "rollup";

/**
 * Used to inject the CSS into the bundle.
 * This will then be handled by the runtime.
 */

export const cssInjector = () => ({
  name: "cssInjector",
  enforce: "post",
  async generateBundle(_: any, bundle: OutputBundle) {
    let aggregatedStyles = "";
    // Iterate over the bundle to find and aggregate CSS
    for (const [key, fileDetails] of Object.entries(bundle)) {
      if (
        fileDetails.type === "asset" &&
        fileDetails.fileName.endsWith(".css")
      ) {
        aggregatedStyles +=
          (fileDetails as OutputAsset).source.toString() + "\n";
        delete bundle[key];
      }
    }

    // // Find the entry chunk to append the styles export
    const entryChunk = Object.values(bundle).find(
      (file): file is OutputChunk => file.type === "chunk" && file.isEntry,
    );

    if (entryChunk) {
      entryChunk.code += `\nmodule.exports.styles = \`${aggregatedStyles}\`;`;
    } else {
      console.error("No entry chunk found in the bundle.");
    }
  },
});
