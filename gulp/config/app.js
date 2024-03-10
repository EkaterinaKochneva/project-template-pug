const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  imagemin: {
    progressive: true,
    scgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    optimizationLevel: 3 // 0 to 7
  },

  autoprefixer: {
    grid: true,
    overrideBrowserslist: ["last 3 versions"],
    cascade: true
  }
}