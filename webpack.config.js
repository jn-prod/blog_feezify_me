const env = (process.env.NODE_ENV === 'production')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let config
let cssConfig = []

if (!env) {
  // DEVELOPPEMENT CONFIG
  config = require('./webpack-config/dev')
  cssConfig.push('style-loader')
} else {
  // PRODUCTION CONFIG
  config = require('./webpack-config/prod')
}

cssConfig.push(
  {
    loader: MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      url: false,
      minimize: true,
      sourceMap: true
    }
  }
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
      test: /\.(css|scss)$/,
      use: cssConfig
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
    }
  ]
}

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: "[name].css"
  }),
  new UglifyJsPlugin()
)

if (env) {
  config.plugins.push(new UglifyJsPlugin())
} 

module.exports = config
