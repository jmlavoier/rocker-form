const path = require('path');

const PATHS = {
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
};

module.exports = {
  entry: PATHS.src,

  output: {
    filename: '[name].js',
    path: PATHS.public,
  },

  resolve: {
    alias: {
      '~': PATHS.src,
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
