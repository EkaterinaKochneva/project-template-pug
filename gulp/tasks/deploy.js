const ghpages = require('gh-pages');
const path = require('../config/path.js');

module.exports = function deploy(cb) {
  ghpages.publish(path.buildFolder, {
    branch: 'build',
    message: 'chore: build project',
  }, cb);
}