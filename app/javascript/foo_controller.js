define(["inject!foo_view"], function(FooView) {
  return function(foo) {
    this.view = new FooView(foo);

    return this;
  };
});
