import { cssInjector, injectType } from "@plugins";
import { logger, readUserConfig } from "@utils";
import { join } from "node:path";
import { InlineConfig, PluginOption } from "vite";

type Config = {
  name: string;
  entry: string;
  plugins: PluginOption[];
  externals: string[];
};

export const commonConfig = (config: Config): InlineConfig => {
  const userConfig = readUserConfig();
  const externals = [...new Set([
    ...config.externals,
    ...(userConfig.externals ?? [])
  ])]
  return {
    plugins: [...config.plugins, cssInjector() as any, injectType()],
    configFile: false,
    build: {
      outDir: join(process.cwd(), "dist"),
      emptyOutDir: true,
      minify: "terser",
      terserOptions: {
        compress: true,
        mangle: true,
      },
      lib: {
        entry: join(process.cwd(), config.entry),
        name: config.name,
        fileName: "main"
      },
      rollupOptions: {
        external: externals,
        output: {
          format: "cjs", // This is so it is one less step of parsing we need to do at the end.
          globals: externals.reduce(
            (acc, curr) => ({ ...acc, [curr]: curr }),
            {},
          ),
        },
      },
    },
    define: {
      "process.env": {}, // This is because umd doesn't have process.env.
    },
    customLogger: logger as any,
  };
};
