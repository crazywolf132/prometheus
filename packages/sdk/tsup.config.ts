import { defineConfig } from "tsup";

export default defineConfig({
  name: "SDK",
  entryPoints: ["./src/index.ts"],
  external: ["react", "react-dom"],
  target: "esnext",
  dts: true,
  format: ["esm"],
  clean: true,
});
