
const commonConfig = require("./webpack.config");
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(commonConfig, {
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'build')
  },
  mode: 'production',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist'
  }
});