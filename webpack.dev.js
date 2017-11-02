const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('dev'),
  }
})

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    WebpackDefinePluginConfig,
  ],
});
