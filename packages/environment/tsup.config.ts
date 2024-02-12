import { defineConfig } from 'tsup';

export default defineConfig({
    name: "ENV",
    entry: ["./src/main.tsx"],
    noExternal: ["react", "react-dom"],
    external: ["@prometheus/runtime", "@local/prometheus"],
    platform: "browser",
    target: "es2015",
    skipNodeModulesBundle: false,
})