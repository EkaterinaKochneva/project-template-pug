const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const babel = require('gulp-babel');
const include = require('gulp-include');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const gulpif = require('gulp-if');

module.exports = function scripts() {
  return src(path.scripts.src)
    .pipe(include())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest(path.scripts.build)) // Несжатый дубль скриптов
    .pipe(gulpif(app.isProd, uglify()))
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(dest(path.scripts.build))
}