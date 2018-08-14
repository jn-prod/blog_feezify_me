const path = require("path")
var data = require('./data').dev

let config = {
  mode: data.mode,
  entry: data.entry,
  output: {
    path: data.output.path,
    filename: data.output.filename
  },
  plugins: [],
  // devServer: {
  //   contentBase: path.resolve(__dirname, "./assets/public"),
  //   historyApiFallback: true,
  //   inline: true,
  //   open: true,
  //   hot: true
  // },
  devtool: data.devtool,
  watch: data.watch
}

module.exports = config
