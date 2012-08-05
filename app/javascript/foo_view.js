define(function() {
  return function(foo) {
    this.foo_html = '<p>' + foo.bar() + '</p>';

    return this;
  };
});
