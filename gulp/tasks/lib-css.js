const { src, dest } = require('gulp');

const path = require('../config/path.js');

module.exports = function libCss() {
  return src(path.libCss.src)
    .pipe(dest(path.libCss.build))
}