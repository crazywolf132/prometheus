import { defineConfig } from 'tsup';

export default defineConfig({
    name: "ENV",
    entry: ["./src/main.tsx"],
    noExternal: ["react", "react-dom"],
    target: "es2015",
    format: ["cjs"],
    skipNodeModulesBundle: false
})