const path = require('path')

module.exports = {
  dev: {
    mode: 'development',
    entry: path.resolve(__dirname, '../assets/src/js/main.js'),
    output: {
      path: path.resolve('public/'),
      sourceMapFilename: '[file].map',
      filename: 'app.js',
      publicPath: '/'
    }
  },
  prod: {
    mode: 'production',
    entry: path.resolve(__dirname, '../assets/src/js/main.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'foo.bundle.js'
    }
  }
}
