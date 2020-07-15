const path = require("path");
const entryPath = "1_hello_world/js";
const outPath = "1_hello_world";
const entryFile = "app.js";

module.exports = {
  watch: true,
  entry: `./${entryPath}/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${outPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${outPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};