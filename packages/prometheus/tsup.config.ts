import { defineConfig } from "tsup";

export default defineConfig(
    [
    {
      name: "PROMETHEUS",
      entryPoints: ["src/index.ts"],
      target: "esnext",
      format: ["cjs", "esm"],
      dts: true,
      platform: "node",
      metafile: true,
      skipNodeModulesBundle: false,
    },
    {
      name: "PROMETHEUS_SERVER",
      entry: {
        "server": "src/server/index.ts"
      },
      target: "esnext",
      format: ["cjs", "esm"],
      platform: "node",
      dts: true,
      skipNodeModulesBundle: true,
    }
  ]
);
