const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var CommonsChunkPlugin = require("webpack/lib/optimize/SplitChunksPlugin")
console.log('查看当前目录路径')
console.log(__dirname)


module.exports = {
  entry: {
    app: './src/app.js',
    common: ['jquery']
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    publicPath: __dirname + '/dist/',
    chunkFilename: '[name].bundel.js'
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
      template: './src/index.html',
      filename: './index.html'
    }),
    new CommonsChunkPlugin({
      name: 'common'
    }),
    //如果把下面的注释解开,打包后,虽然已经将jq打包进vendor,但是app.bundel.js还是有jq源码,
    // 有什么办法,又能全局引用jq,又能让jq只被打包进vendor,而不被打包进其他文件吗???
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new BundleAnalyzerPlugin()
  ]
}