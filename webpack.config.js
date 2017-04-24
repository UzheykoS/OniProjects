const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=8192'
            },
            {
                test: /\.xml$/, loader: 'xml-loader'
            },
            {
                test: /\.json$/, loader: 'raw-loader'
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'template.ejs' }),
        new ExtractTextPlugin("styles.css")
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};