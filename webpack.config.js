const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(src, 'index.js'),
  plugins: [
    new CleanPlugin([dist]),
    new HtmlPlugin({
      title: 'Soccerlar',
      template: path.resolve(src, 'index.html')
    })
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: dist
  }
}
