import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

const external = ["react", "react-dom"];

const plugins = [
  PeerDepsExternalPlugin(),
  resolve(),
  commonjs(),
  scss({
    fileName: "styles.css",
    outputStyle: "compressed",
  }),
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: false,
    declarationMap: false,
    composite: false,
  }),
  terser(),
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins,
    external,
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins,
    external,
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/types.d.ts",
        format: "es",
      },
    ],
    external: [/\.scss$/],
    plugins: [dts.default()],
  },
];
