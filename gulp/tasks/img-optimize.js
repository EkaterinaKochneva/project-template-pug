const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require('gulp-if');

module.exports = function imgOptimize() {
  return src(path.imgOptimize.src)
    .pipe(newer(path.imgOptimize.build))
    .pipe(webp())
    .pipe(dest(path.imgOptimize.build))
    .pipe(src(path.imgOptimize.src))
    .pipe(newer(path.imgOptimize.build))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.imgOptimize.build))
}