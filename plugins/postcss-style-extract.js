const postcss = require('postcss')
const defaultOptions = {}
module.exports = postcss.plugin('postcss-style-extract', function (options) {
  options = Object.assign({}, defaultOptions, options)

  return function (style, result) {
    console.log(style, result)
  }
})