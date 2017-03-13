'use strict';
const webpack = require('webpack');


module.exports = {
    //devtool: '#eval-source-map',
    entry: {
        app: './public/app/entry.js'
    },
    output: {
        path: __dirname,
        filename: "./public/js/app/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
