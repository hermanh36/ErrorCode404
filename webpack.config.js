// webpack.config.js
var path = require('path');

module.exports = {
  entry: './frontend/error_404.jsx',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts')
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-env']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};