import { defineConfig } from "tsup";

export default defineConfig(
    [
    {
      name: "PROMETHEUS",
      entryPoints: ["src/index.ts"],
      target: "esnext",
      format: ["esm"],
      dts: true,
      platform: "node",
      metafile: true,
      skipNodeModulesBundle: true,
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
