var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname + '/../app/javascript/',
  nodeRequire: require
});

requirejs(['foo'], function(foo) {
  describe("foo", function() {
    describe("bar", function() {
      it("should return 'bar'", function() {
        expect(foo.bar()).toEqual("bar");
      });
    });
    describe("quxbar", function() {
      it("should return 'quxbar'", function() {
        expect(foo.quxbar()).toEqual("quxbar");
      });
    });
  });
});
