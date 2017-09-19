const path = require('path')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(src, 'index.js'),
  output: {
    filename: 'app.js',
    path: dist
  }
}
