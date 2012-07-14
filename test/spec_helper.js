exports.spec_helper = (function() {
  var requirejs = require('requirejs');

  requirejs.config({
    baseUrl: __dirname + '/../app/javascript/',
    nodeRequire: require
  });

  return {
    requirejs: requirejs
  }
})();
