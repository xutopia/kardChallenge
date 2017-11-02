const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production'),
  }
})

const UglifyJSPluginConfig = new UglifyJSPlugin({
  sourceMap: true,
});

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    UglifyJSPluginConfig,
    WebpackDefinePluginConfig,
  ],
})
