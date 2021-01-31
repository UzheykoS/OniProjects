require('dotenv').config();
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const baseConfig = require('./webpack.config');
const APP_DIR = path.resolve(__dirname);

const prodConfiguration = () => {
  const { GOOGLE_API_KEY } = process.env;

  return merge([
    {
      output: {
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        path: path.join(APP_DIR, '..', 'dist'),
        publicPath: '/',
      },
      optimization: {
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      },
      mode: 'production',
      devtool: 'cheap-module-source-map',
      plugins: [
        new MiniCssExtractPlugin(),
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        }),
        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/index.html',
          filename: './index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
          googleApi: GOOGLE_API_KEY,
        }),
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      ],
    },
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
