
const environment = process.env.NODE_ENV;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
import { Configuration } from 'webpack';
import commonConfig from "./webpack.common";
import * as path from 'path';

if (environment === "production") {
    commonConfig.devtool = 'source-map';
    commonConfig.plugins.push(new UglifyJSPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }));
}

export default commonConfig;