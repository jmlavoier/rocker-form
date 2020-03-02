const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommons = require('./config.commons');

module.exports = merge(webpackCommons, {
  mode: 'production',

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rocker Form',
      template: 'src/index.html',
    }),
  ],
});
