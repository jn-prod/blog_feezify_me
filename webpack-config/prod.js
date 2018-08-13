const webpack = require('webpack')
var data = require('./data').prod

let config = {
  mode: data.mode,
  entry: data.entry,
  output: {
    path: data.output.path,
    filename: data.output.filename
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },  
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
}

module.exports = config
