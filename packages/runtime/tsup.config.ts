import { defineConfig } from "tsup";

export default defineConfig({
  name: "RUNTIME",
  entry: ["./src/index.ts"],
  target: "es2020",
  format: "esm",
  dts: true,
  sourcemap: true,
  minify: true,
  clean: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  platform: "browser"
});
