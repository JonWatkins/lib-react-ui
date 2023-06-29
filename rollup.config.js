import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

const snakeToCamel = (str) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );

const external = ["react", "react-dom"];

const plugins = [
  PeerDepsExternalPlugin(),
  resolve(),
  commonjs(),
  scss({
    fileName: "bundle.css",
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
        name: snakeToCamel(packageJson.name),
        format: "umd",
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
        name: snakeToCamel(packageJson.name),
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
