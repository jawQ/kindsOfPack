const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './app/first/app.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: [' ', '.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: ['env', 'es2017'],
          plugins: ['syntax-dynamic-import', 'transform-runtime']
        }
      }]
    }]
  },
  plugins: [
    new cleanWebpackPlugin([__dirname + '/dist/*']),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ]
}