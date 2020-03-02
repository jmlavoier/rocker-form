const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommons = require('./config.commons');

module.exports = merge(webpackCommons, {
  mode: 'development',

  devServer: {
    compress: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '[DEV] Rocker Form',
      template: 'src/index.html',
    }),
  ],
});
