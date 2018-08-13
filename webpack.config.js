const env = (process.env.NODE_ENV === 'production')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config, cssConfig

if (!env) {
  // DEVELOPPEMENT CONFIG
  config = require('./webpack-config/dev')
  cssConfig = ['style-loader'] //, 'file-loader'
} else {
  // PRODUCTION CONFIG
  config = require('./webpack-config/prod')
  cssConfig = [ MiniCssExtractPlugin.loader] //, 'file-loader'
}

cssConfig.push(
  {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'css/'
    }
  },
  'css-loader',
  'sass-loader'
)

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
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }]
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }]
    },
    {
      test: /\.(css|scss)$/,
      use: cssConfig
    }
  ]
}

module.exports = config
