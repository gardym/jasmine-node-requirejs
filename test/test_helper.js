exports.configure_requirejs = function(module_path, requirejs) {
  requirejs.config({
      baseUrl: module_path + '/../app/javascript',
      nodeRequire: require
  });
};
