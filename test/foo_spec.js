var requirejs = require('./requirejs_helper').requirejs;

var stub_baz = function() {
  return {
    qux: function() {
      return "stubqux";
    }
  };
};

requirejs.config({
  inject: { 'baz': stub_baz }
});

requirejs(['foo'], function(foo) {
  describe("foo", function() {
    describe("bar", function() {
      it("should return 'bar'", function() {
        expect(foo.bar()).toEqual("bar");
      });
    });
    describe("quxbar", function() {
      it("should append 'bar' to baz.qux", function() {
        expect(foo.quxbar()).toEqual("stubquxbar");
      });
    });
  });
});
