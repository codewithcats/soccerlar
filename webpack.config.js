const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(src, 'index.js'),
  plugins: [
    new HtmlPlugin({
      title: 'Soccerlar',
      template: path.resolve(src, 'index.html')
    })
  ],
  output: {
    filename: 'app.js',
    path: dist
  }
}
