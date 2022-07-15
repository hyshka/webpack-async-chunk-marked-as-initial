const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    first: "./src/first",
    second: "./src/second",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    chunkIds: "named",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      minSize: 0,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "first.html",
      chunks: ["first"],
    }),
    new HtmlWebpackPlugin({
      filename: "second.html",
      chunks: ["second"],
    }),
  ],
};
