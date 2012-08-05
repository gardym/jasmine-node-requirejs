define({
  load: function(name, req, load, config) {
    if(config.inject && config.inject[name]) {
      load(config.inject[name]());
    } else {
      req([name], function(original) {
        load(original);
      });
    }
  }
});
