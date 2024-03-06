import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import svg from "rollup-plugin-svg";
import image from "@rollup/plugin-image";
import css from "rollup-plugin-import-css";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import cssOnly from "rollup-plugin-css-only";
import eslint from "@rollup/plugin-eslint";
import pkg from "./package.json" assert { type: "json" };

const config = [
  {
    input: "./src/index.ts",
    external: Object.keys(pkg.dependencies),
    output: [
      {
        file: "dist/index.js",
        format: "es",
      },
    ],
    plugins: [
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
        extensions: [".tsx", ".ts", ".js"],
      }),
      external(),
      resolve(),
      terser({
        compress: true,
      }),
      svg(),
      image(),
      css(),
      cssOnly(),
      eslint({}),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["src/demo/ProfilePage.tsx"],
      }),
    ],
  },
  {
    input: "./src/components/profile/styles.css",
    output: {
      file: "dist/index.css",
      format: "es",
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        extract: true,
        minimize: true,
      }),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts({ tsconfig: "./tsconfig.json" })],
  },
];

export default config;
