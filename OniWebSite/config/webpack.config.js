const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const hash = require('string-hash');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');
const aliases = require('./aliases');

module.exports = env => {
  const {
    NODE_ENV,
    ONI_WEB_SERVER_URL,
    INSTAGRAM_USER_ID,
    INSTAGRAM_CLIENT_ID,
    INSTAGRAM_ACCESS_TOKEN,
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID,
  } = env;

  return merge([
    {
      entry: ['react-hot-loader/patch', '@babel/polyfill', APP_DIR],
      output: {
        filename: '[name].bundle.js',
        path: path.join(APP_DIR, '..', 'dist'),
      },
      devtool: 'inline-source-map',
      mode: 'development',
      devServer: {
        contentBase: path.join(APP_DIR, '..', 'dist'),
        compress: false,
        port: 9040,
      },
      target: 'web',
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
              NODE_ENV === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
              'css-loader',
            ],
          },
          {
            enforce: 'pre',
            test: /\.tsx?$/,
            use: 'source-map-loader',
          },
          // {
          //     test: /\.(jpe?g|png|gif|svg)$/i,
          //     loaders: ['file-loader?name=/images/[name].[ext]'],
          // },
          // {
          //     test: /\.(png|jpg|gif)$/,
          //     loader: 'url-loader',
          //     options: {
          //         limit: 8192
          //     }
          // },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  babelrc: false,
                  presets: [
                    [
                      '@babel/preset-env',
                      // { targets: { browsers: 'last 2 versions' } },
                    ],
                    '@babel/preset-typescript',
                    '@babel/preset-react',
                  ],
                  plugins: [
                    [
                      '@babel/plugin-proposal-class-properties',
                      { loose: true },
                    ],
                    'react-hot-loader/babel',
                    'babel-plugin-styled-components',
                  ],
                },
              },
              {
                loader: 'ts-loader',
              },
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.woff$/,
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
          {
            test: /\.woff2$/,
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff2',
            },
          },
          {
            test: /\.otf$/,
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'font/opentype',
            },
          },
          {
            test: /\.ttf$/,
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
          {
            test: /\.eot$/,
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
              limit: 10000,
              mimetype: 'application/vnd.ms-fontobject',
            },
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
            INSTAGRAM_USER_ID: JSON.stringify(INSTAGRAM_USER_ID),
            INSTAGRAM_CLIENT_ID: JSON.stringify(INSTAGRAM_CLIENT_ID),
            INSTAGRAM_ACCESS_TOKEN: JSON.stringify(INSTAGRAM_ACCESS_TOKEN),
          },
        }),
        new CopyWebpackPlugin([{ from: 'public' }]),
        new webpack.IgnorePlugin(/^\.\/locale/, /moment/),
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          filename: './index.html',
        }),
        new MiniCssExtractPlugin(),
      ],
    },
  ]);
};
