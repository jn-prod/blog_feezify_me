var data = require('./data').dev

let config = {
  mode: data.mode,
  entry: data.entry,
  output: {
    path: data.output.path,
    filename: data.output.filename
  }
}

module.exports = config
