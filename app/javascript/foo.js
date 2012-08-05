define(["inject!baz"], function(baz) {
  return {
    bar: function() {
      return "bar";
    },
    quxbar: function() {
      return baz.qux() + "bar";
    }
  };
});
