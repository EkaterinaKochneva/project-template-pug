const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const gulpif = require('gulp-if');

module.exports = function style() {
  return src(path.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(groupCssMediaQueries())
    .pipe(gulpif(app.isProd, autoprefixer(app.autoprefixer)))
    .pipe(rename({
      basename: "style",
    }))
    .pipe(dest(path.styles.build)) //Несжатый дубль файла стилей
    .pipe(gulpif(app.isProd, cleanCss()))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(dest(path.styles.build))
}