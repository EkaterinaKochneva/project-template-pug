const { src, dest } = require('gulp');
const path = require('../config/path.js');
const newer = require('gulp-newer');

module.exports = function icons() {
  return src(path.icons.src)
    .pipe(newer(path.icons.build))
    .pipe(dest(path.icons.build))
}