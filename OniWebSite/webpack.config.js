const webpack = require('webpack');
const path = require('path');
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = env => {
    const { NODE_ENV } = env;
    return merge([
        {
            entry: ['@babel/polyfill', APP_DIR],
            output: {
                filename: "[name].bundle.js",
                path: path.join(APP_DIR, '..', 'dist')
            },
            devtool: 'inline-source-map',
            mode: 'development',
            devServer: {
                contentBase: path.join(APP_DIR, '..', 'dist'),
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
                    {
                        test: /\.scss$/,
                        use: [
                            NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        use: [
                            NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            'css-loader'
                        ]
                    },
                    {
                        enforce: 'pre',
                        test: /\.tsx?$/,
                        use: "source-map-loader"
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
                                loader: 'babel-loader'
                            },
                            {
                                loader: 'ts-loader'
                            }
                        ],
                        exclude: /node_modules/
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
                ]
            },
            resolve: {
                extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify(NODE_ENV)
                    }
                }),
                new CopyWebpackPlugin([{ from: 'public' }]),
                new webpack.IgnorePlugin(/^\.\/locale/, /moment/),
                new HtmlWebpackPlugin({
                    template: 'src/index.html',
                    filename: './index.html'
                })
            ]
        }
    ])
};