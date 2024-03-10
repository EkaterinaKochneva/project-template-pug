const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./gulp/config/path.js');
const app = require('./gulp/config/app.js');

//Сервер
const server =() => {
	browserSync.init({
		server: {
			baseDir: path.buildFolder,
			serveStaticOptions: {
        extensions: ['pug'],
      },
		},
		notify: false,
    port: 3000,
    open: true,
	});
}

// Задачи
const clear = require('./gulp/tasks/clear.js')
const pug = require('./gulp/tasks/pug.js')
const style = require('./gulp/tasks/style.js')
const scripts = require('./gulp/tasks/scripts.js')
const imgOptimize = require('./gulp/tasks/img-optimize.js')
const icons = require('./gulp/tasks/icons.js')
const spriteSvg = require('./gulp/tasks/sprite-svg.js')
const fonts = require('./gulp/tasks/fonts.js')
const libJs = require('./gulp/tasks/lib-js.js')
const libCss = require('./gulp/tasks/lib-css.js')
const favicon = require('./gulp/tasks/favicon.js')
const copyFiles = require('./gulp/tasks/copy-files.js')
const deploy = require('./gulp/tasks/deploy.js')


//Наблюдатель
const watcher = () => {
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.styles.watch, style).on('all', browserSync.reload);
  watch(path.scripts.watch, scripts).on('all', browserSync.reload);
  watch(path.imgOptimize.watch, imgOptimize).on('all', browserSync.reload);
  watch(path.icons.watch, icons).on('all', browserSync.reload);
  watch(path.spriteSvg.watch, spriteSvg).on('all', browserSync.reload);
  watch(path.libJs.watch, libJs).on('all', browserSync.reload);
  watch(path.libCss.watch, libCss).on('all', browserSync.reload)
  watch(path.favicon.watch, favicon).on('all', browserSync.reload);
  watch(path.files.watch, copyFiles).on('all', browserSync.reload);
}

exports.clear = clear;
exports.pug = pug;
exports.style = style;
exports.scripts = scripts;
exports.imgOptimize = imgOptimize;
exports.icons = icons;
exports.spriteSvg = spriteSvg;
exports.fonts = fonts;
exports.libJs = libJs;
exports.libCss = libCss;
exports.favicon = favicon;
exports.copyFiles = copyFiles;

exports.server = server;
exports.watcher = watcher;
exports.deploy = deploy;

//Сборка

const mainTasks = series(
  clear,
  parallel(pug, style, scripts, imgOptimize, icons, spriteSvg, fonts, libJs, libCss, favicon, copyFiles),
)

const build = series(
  mainTasks  
)

const dev = series(
  mainTasks,
  parallel(watcher, server)
)
exports.default = app.isProd ? build : dev;