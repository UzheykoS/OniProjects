
const commonConfig = require("./webpack.config");
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
   mode: 'production',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   }
 });