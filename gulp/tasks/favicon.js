const { src, dest } = require('gulp');

const path = require('../config/path.js');

module.exports = function favicon() {
  return src(path.favicon.src)
    .pipe(dest(path.buildFolder))
}