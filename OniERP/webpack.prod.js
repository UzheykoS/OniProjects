
const commonConfig = require("./webpack.config");
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
   mode: 'production',
   devtool: 'cheap-module-source-map',
   devServer: {
     contentBase: './dist'
   }
 });