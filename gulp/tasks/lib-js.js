const { src, dest } = require('gulp');
const path = require('../config/path.js');

module.exports = function libJs() {
  return src(path.libJs.src)
    .pipe(dest(path.libJs.build))
}