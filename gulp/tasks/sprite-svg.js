const { src, dest } = require('gulp');
const path = require('../config/path.js');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');

module.exports = function spriteSvg() {
  return src(path.spriteSvg.src)
    .pipe(cheerio({
      run($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg',
        }
      }
    }))
    
    .pipe(dest(path.spriteSvg.build))
}