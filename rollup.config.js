import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import license from "rollup-plugin-license";
import commonjs from "@rollup/plugin-commonjs";

const modules = [
  "array",
  "assert",
  "BiMap",
  "error",
  "function",
  "guard",
  "index",
  "iterable",
  "object",
  "string",
  "sorting",
  // "types", <- TypeScript builds the d.ts file for this
  "UnsafeMap",
];

const extensions = [".ts", ".js"];

const banner = {
  content:
    "Shed | Copyright (C) 2021 Peter Kröner | peter@peterkroener.de | MIT",
  commentStyle: "ignored",
};

const moduleBaseConfig = {
  external: [/@sirpepe\/shed/, /@babel\/runtime/, /core-js/],
  plugins: [
    nodeResolve({ extensions }),
    babel({
      extensions,
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "defaults,not ie 11",
            useBuiltIns: "usage",
            corejs: "3.8",
          },
        ],
        "@babel/preset-typescript",
      ],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
};

const browserBaseConfig = {
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: "inline",
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "defaults,not ie 11",
            useBuiltIns: "usage",
            corejs: "3.8",
          },
        ],
        "@babel/preset-typescript",
      ],
    }),
  ],
};

export default [
  ...modules.flatMap((module) => [
    {
      input: `./src/${module}.ts`,
      output: {
        file: `dist/esm/${module}.js`,
        format: "esm",
        plugins: [license({ banner })],
      },
      ...moduleBaseConfig,
    },
    {
      input: `./src/${module}.ts`,
      output: {
        file: `dist/cjs/${module}.js`,
        format: "cjs",
        plugins: [license({ banner })],
      },
      ...moduleBaseConfig,
    }
  ]),
  {
    input: "./src/index.ts",
    output: {
      file: `dist/min/index.js`,
      format: "umd",
      name: "_",
      plugins: [terser(), license({ banner })],
    },
    ...browserBaseConfig,
  },
];
