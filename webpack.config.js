// webpack.config.mjs

import path from "path";
import { fileURLToPath } from "url";

/** Workaround for __dirname and __filename in ESM */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration} */
export default {
  entry: "./reactive-from-validation.ts", // <- entry at root
  mode: "development",
  output: {
    filename: "validation-core.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    module: true, // output as native ES module
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@core": path.resolve(__dirname, "Core"),
      "@services": path.resolve(__dirname, "Services"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
};
