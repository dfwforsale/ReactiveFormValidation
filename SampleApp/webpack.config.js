const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
     validationInterop: path.resolve(__dirname, "main.ts"),
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./Dist"), // ✅ output to ./Dist
    clean: true,
    module: true,
    library: {
      type: "module", // ✅ expose as native ESM
    },
    environment: {
      module: true, // ✅ ensure ES module compatibility
    },
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
  extensions: [".ts", ".js"],
  alias: {
    "@core": path.resolve(__dirname, "../Core"),
    "@services": path.resolve(__dirname, "../Services"),
  },
  fallback: {
    "module": false, // ⛔ suppresses `node:module`
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
