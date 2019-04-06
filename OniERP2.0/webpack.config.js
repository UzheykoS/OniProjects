const webpack = require('webpack');
const path = require('path');
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer');
const aliases = require('./aliases');

const apiKey = process.env.API_KEY;
const clientId = process.env.CLIENT_ID;
const APP_DIR = path.resolve(__dirname, './src');

module.exports = env => {
    const { NODE_ENV } = env;
    return merge([
        {
            entry: ['react-hot-loader/patch', '@babel/polyfill', APP_DIR],
            output: {
                filename: "[name].bundle.js",
                path: path.join(APP_DIR, 'dist')
            },
            devtool: 'inline-source-map',
            mode: 'development',
            devServer: {
                contentBase: path.join(APP_DIR, 'dist'),
                compress: false,
                port: 3000
            },
            target: 'web',
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all'
                        }
                    }
                }
            },
            module: {
                rules: [
                    // First, run the linter.
                    // It's important to do this before Babel processes the JS.
                    {
                        enforce: 'pre',
                        test: /\.(ts|tsx)?$/,
                        loader: 'tslint-loader',
                        options: {
                            emitErrors: false,
                            failOnHint: false,
                        },
                        include: path.resolve(__dirname, './src'),
                    },
                    {
                        oneOf: [
                            {
                                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                                loader: require.resolve('url-loader'),
                                options: {
                                    limit: 50000,
                                    name: 'static/media/[name].[hash:8].[ext]',
                                },
                            },
                            {
                                test: /\.(j|t)sx?$/,
                                exclude: /node_modules/,
                                use: {
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
                                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                                            'react-hot-loader/babel',
                                            'lodash',
                                        ],
                                    },
                                },
                            },
                            {
                                test: /\.s?css$/,
                                use: [
                                    require.resolve('style-loader'),
                                    {
                                        loader: require.resolve('css-loader'),
                                        options: {
                                            importLoaders: 1,
                                        },
                                    },
                                    {
                                        loader: require.resolve('postcss-loader'),
                                        options: {
                                            // Necessary for external CSS imports to work
                                            // https://github.com/facebookincubator/create-react-app/issues/2677
                                            ident: 'postcss',
                                            plugins: () => [
                                                require('postcss-flexbugs-fixes'),
                                                autoprefixer({
                                                    browsers: [
                                                        '>1%',
                                                        'last 4 versions',
                                                        'Firefox ESR',
                                                        'not ie < 9', // React doesn't support IE8 anyway
                                                    ],
                                                    flexbox: 'no-2009',
                                                }),
                                            ],
                                        },
                                    },
                                ],
                            },
                            {
                                test: /\.svg$/,
                                exclude: /node_modules/,
                                use: [
                                    {
                                        loader: 'babel-loader',
                                        options: {
                                            babelrc: false,
                                            presets: [
                                                [
                                                    '@babel/preset-env',
                                                    {
                                                        targets: {
                                                            ie: '11',
                                                        },
                                                    },
                                                ],
                                            ],
                                        },
                                    },
                                    {
                                        loader: 'react-svg-loader',
                                        options: {
                                            svgo: {
                                                plugins: [
                                                    {
                                                        cleanupIDs: {
                                                            remove: true,
                                                            minify: true,
                                                            prefix: {
                                                                toString() {
                                                                    this.counter = this.counter || 0;
                                                                    return `id-${this.counter++}`;
                                                                },
                                                            },
                                                        },
                                                    },
                                                ],
                                                floatPrecision: 2,
                                            },
                                        },
                                    },
                                ],
                            },
                            {
                                test: /\.woff$/,
                                loader: 'url-loader',
                                options: {
                                    name: 'fonts/[name].[ext]',
                                    limit: 10000,
                                    mimetype: 'application/font-woff'
                                }
                            },
                            {
                                test: /\.woff2$/,
                                loader: 'url-loader',
                                options: {
                                    name: 'fonts/[name].[ext]',
                                    limit: 10000,
                                    mimetype: 'application/font-woff2'
                                }
                            },
                            {
                                test: /\.otf$/,
                                loader: 'url-loader',
                                options: {
                                    name: 'fonts/[name].[ext]',
                                    limit: 10000,
                                    mimetype: 'font/opentype'
                                }
                            },
                            {
                                test: /\.ttf$/,
                                loader: 'url-loader',
                                options: {
                                    name: 'fonts/[name].[ext]',
                                    limit: 10000,
                                    mimetype: 'application/octet-stream'
                                }
                            },
                            {
                                test: /\.eot$/,
                                loader: 'url-loader',
                                options: {
                                    name: 'fonts/[name].[ext]',
                                    limit: 10000,
                                    mimetype: 'application/vnd.ms-fontobject'
                                }
                            },
                        ],
                    }
                ]
            },
            resolve: {
                extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"],
                alias: aliases
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify(NODE_ENV),
                        'API_KEY': JSON.stringify(apiKey),
                        'CLIENT_ID': JSON.stringify(clientId)
                    }
                }),
                new CopyWebpackPlugin([{ from: 'public' }]),
                new webpack.IgnorePlugin(/^\.\/locale/, /moment/),
                new HtmlWebpackPlugin({
                    template: 'public/index.html',
                    filename: './index.html'
                }),
                new webpack.HotModuleReplacementPlugin(),
                new ForkTsCheckerWebpackPlugin({
                    tsconfig: path.resolve(__dirname, './tsconfig.json'),
                    async: true,
                }),
            ]
        }
    ])
};