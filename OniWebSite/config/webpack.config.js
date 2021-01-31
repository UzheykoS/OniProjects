const path = require('path');
require('dotenv').config();

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const hash = require('string-hash');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');
const aliases = require('./aliases');

module.exports = () => {
  const {
    NODE_ENV,
    ONI_WEB_SERVER_URL,
    INSTAGRAM_ACCESS_TOKEN,
    GOOGLE_API_KEY,
  } = process.env;
  const isDevelopment = NODE_ENV !== 'production';
  console.log('NODE_ENV:', NODE_ENV);

  return merge([
    {
      entry: ['react-hot-loader/patch', '@babel/polyfill', APP_DIR],
      output: {
        filename: '[name].bundle.js',
        path: path.join(APP_DIR, '..', 'dist'),
      },
      devtool: isDevelopment ? 'inline-source-map' : 'cheap-module-source-map',
      mode: isDevelopment ? 'development' : 'production',
      devServer: {
        open: 'http://localhost',
        port: 9040,
        contentBase: path.join(APP_DIR, '..', 'dist'),
        compress: false,
        clientLogLevel: 'silent',
        watchOptions: {
          ignored: /node_modules/,
        },
        hot: true,
      },
      target: 'web',
      cache: true,
      optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.svg$/,
            use: ({ resource }) => ({
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      cleanupIDs: {
                        prefix: `svg-${hash(resource)}`,
                      },
                    },
                  ],
                },
              },
            }),
          },
          {
            test: /\.css$/,
            use: [
              isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
            ],
          },
          {
            enforce: 'pre',
            test: /\.tsx?$/,
            use: 'source-map-loader',
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  babelrc: false,
                  presets: [
                    ['@babel/preset-env'],
                    '@babel/preset-typescript',
                    '@babel/preset-react',
                  ],
                  plugins: [
                    [
                      '@babel/plugin-proposal-class-properties',
                      { loose: true },
                    ],
                    'babel-plugin-styled-components',
                    'react-hot-loader/babel',
                  ].filter(Boolean),
                },
              },
              {
                loader: 'ts-loader',
              },
            ],
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
        alias: Object.assign({}, aliases, {
          'react-dom': '@hot-loader/react-dom',
        }),
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV),
            ONI_WEB_SERVER_URL: JSON.stringify(ONI_WEB_SERVER_URL),
            INSTAGRAM_ACCESS_TOKEN: JSON.stringify(INSTAGRAM_ACCESS_TOKEN),
          },
        }),
        new CopyWebpackPlugin({
          patterns: [{ from: path.resolve(__dirname, '../public') }],
        }),
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          filename: './index.html',
          googleApi: GOOGLE_API_KEY,
        }),
        // new MiniCssExtractPlugin(),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
      ].filter(Boolean),
    },
  ]);
};
