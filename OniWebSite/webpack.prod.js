const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require("./webpack.config");
const APP_DIR = path.resolve(__dirname);

const prodConfiguration = env => {
  return merge([
    {
      output: {
        filename: "[name].bundle.js",
        path: path.join(APP_DIR, 'build')
      },
      mode: 'production',
      devtool: 'cheap-module-source-map',
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin()
      ],
    },
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
}