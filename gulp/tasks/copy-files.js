const { src, dest } = require('gulp');

const path = require('../config/path.js');

module.exports = function copyFiles() {
  return src(path.files.src)
    .pipe(dest(path.files.build))
}