const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
          },
        },
      },
    ],
  },
  context: resolve('example'),
  entry: ['babel-polyfill', './example.js'],
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-citation-demo.js',
    publicPath: '/',
    pathinfo: true,
  },
};

