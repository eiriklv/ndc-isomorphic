var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: './render/client.js',

  output: {
    filename: 'public/[name].js'
  },

  module: {
    loaders: [{ 
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
