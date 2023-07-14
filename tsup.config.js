import { sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import cssNano from "cssnano";

export default defineConfig({
  entry: ["src/index.js"],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  bundle: true,
  esbuildPlugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([
          autoprefixer,
          postcssPresetEnv({ stage: 0 }),
          cssNano({ preset: "default" }),
        ]).process(source, { from: undefined });
        return css;
      },
    }),
  ],
});
