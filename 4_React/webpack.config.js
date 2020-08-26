const path = require("path");
const entryPath = "2_passing_data/js";
const outPath = "2_passing_data";
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