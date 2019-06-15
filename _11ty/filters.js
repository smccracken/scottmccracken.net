const CleanCSS = require('clean-css')
const htmlmin = require('html-minifier')

module.exports = {
  cssmin: function(code) {
    return new CleanCSS({}).minify(code).styles
  }
}