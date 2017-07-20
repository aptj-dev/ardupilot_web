/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack')

/**
 * Require webpack plugins
 */
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')



/**
 * Add plugins
 */
const plugins = [
  new ExtractTextPlugin(`${'[name]'}.css`),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
  })
]

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader', 'babel-loader',]
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=image/svg+xml',
      },
      {
        test: /\.ico$/,
        loader: 'url-loader?mimetype=image/ico+xml',
      }
    ]
  },
  plugins: plugins,
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Reducers:   path.resolve(__dirname, 'src/reducers'),
      Actions:    path.resolve(__dirname, 'src/actions')
    },
    extensions: ['.js', '.css', '.scss', '.sass', 'json']
  },
  devServer: {
      historyApiFallback: true,
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
  }
}
