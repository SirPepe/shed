import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import license from "rollup-plugin-license";

const modules = [
  "array",
  "assert",
  "base64",
  "BiMap",
  "compress",
  "constants",
  "error",
  "FRDY",
  "function",
  "guard",
  "index",
  "iterable",
  "number",
  "object",
  "regexp",
  "string",
  "set",
  "SortedArray",
  "sorting",
  "TrieMap",
  // "types", <- TypeScript builds the d.ts file for this
  "UnsafeMap",
];

const extensions = [".ts", ".js"];

const banner = {
  content:
    "Shed | Copyright (C) 2024 Peter Kröner | peter@peterkroener.de | MIT",
  commentStyle: "ignored",
};

export default modules.map((module) => ({
  input: `./src/${module}.ts`,
  plugins: [
    nodeResolve({ extensions }),
    babel({
      extensions,
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
  output: {
    file: `dist/${module}.js`,
    format: "esm",
    plugins: [terser(), license({ banner })],
  },
}));
