const del = require('del');
const path = require('../config/path.js');

module.exports = function clear() {
  return del(path.buildFolder)
}