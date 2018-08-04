const env = (process.env.NODE_ENV === 'production')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config, cssConfig

if (!env) {
  // DEVELOPPEMENT CONFIG
  config = require('./webpack-config/dev')
  cssConfig = ['style-loader','css-loader'] //, 'file-loader'
} else {
  // PRODUCTION CONFIG
  config = require('./webpack-config/prod')
  cssConfig = [ MiniCssExtractPlugin.loader, 'css-loader'] //, 'file-loader'
}

config.module = {
  rules: [
    {
      enforce: 'pre',
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=public/fonts/[name].[ext]'
    },
    {
      test: /\.(scss|css)$/,
      use: cssConfig
    }
  ]
}

module.exports = config
