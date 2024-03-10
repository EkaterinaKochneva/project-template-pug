const { src, dest } = require('gulp');
const path = require('../config/path.js');
const rename = require('gulp-rename');
const pugs = require('gulp-pug');

module.exports = function pug() {
  return src(path.pug.src)
    .pipe(pugs({
      basedir: path.srcFolder,
      pretty: true
    }))
    .pipe(rename(function (path) {
      return {
        basename: path.dirname.replace("/index", ""),
        dirname: "",
        extname: ".html"  
      };
    })) 
    .pipe(dest(path.pug.build))
}