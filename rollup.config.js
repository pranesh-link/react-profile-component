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
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      external(),
      resolve(),
      terser({
        compress: true,
      }),
      svg(),
      image(),
      css({
        output: "index.css",
      }),
      cssOnly(),
      postcss({
        extensions: [".css"],
        extract: true,
        minimize: true,
      }),
      uglify(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
