var requirejs = require('requirejs');
var configure_requirejs = require('./test_helper').configure_requirejs;
configure_requirejs(__dirname, requirejs);
  
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
