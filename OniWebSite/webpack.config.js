const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8200
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
                loader: "babel-loader?presets[]=es2015!ts-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?name=/images/[name].[ext]",
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
            {
                test: /\.xml$/, loader: 'xml-loader'
            },
            {
                test: /\.json$/, loader: 'raw-loader'
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' 
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'template.ejs' }),
        new ExtractTextPlugin("styles.css")
    ]
};