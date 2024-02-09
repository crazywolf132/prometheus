import { defineConfig } from 'tsup';

export default defineConfig({
    name: "UI",
    entry: ["./src/index.ts"],
    format: "esm",
    target: 'es2017',
    dts: true,
    clean: true,
    platform: "browser"
})