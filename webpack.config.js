/* global __dirname */

var path = require('path');
var webpack = require('webpack');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: dir_build,
        filename: 'layout-justify.min.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.NoErrorsPlugin()
    ]
}
