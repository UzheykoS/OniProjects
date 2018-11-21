const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require("./webpack.base");
const APP_DIR = path.resolve(__dirname, '..');

const prodConfiguration = env => {
  return merge([
    {
      output: {
        filename: "bundle.js",
        path: path.join(APP_DIR, 'build')
      },
      mode: 'production',
      devtool: 'cheap-module-source-map',
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: './statistics.html' })
      ],
    },
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
}