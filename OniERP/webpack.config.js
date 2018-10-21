const environment = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development';
const apiKey = process.env.API_KEY;
const clientId = process.env.CLIENT_ID;
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?name=/images/[name].[ext]'],
            },
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
                'NODE_ENV': JSON.stringify(environment),
                'API_KEY': JSON.stringify(apiKey),
                'CLIENT_ID': JSON.stringify(clientId)
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale/, /moment/),
        new HtmlWebpackPlugin({
            title: "Template Test",
            template: 'src/index.html'
        })
    ]
};