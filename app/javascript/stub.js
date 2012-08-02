define({
  load: function(name, req, load, config) {
    if(config.stub && config.stub[name]) {
      load(config.stub[name]());
    } else {
      req([name], function(original) {
        load(original);
      });
    }
  }
});
