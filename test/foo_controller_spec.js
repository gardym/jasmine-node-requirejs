var requirejs = require('./requirejs_helper').requirejs;

var MockFooView = jasmine.createSpy('Mock FooView');

requirejs.config({
  inject: {
    'foo_view': function() {
      return MockFooView;
    }
  }
});

requirejs(['foo_controller'], function(FooController) {
  describe('creating FooController', function() {
    describe('with a foo', function() {
      var stub_foo;
      beforeEach(function() {
        stub_foo = jasmine.createSpy('stub foo');
        stub_foo.bar = jasmine.createSpy('stub foo.bar');
      });
      it('should create a new FooView containing foo', function() {
        var foo_controller = new FooController(stub_foo);
        expect(MockFooView).toHaveBeenCalledWith(stub_foo);
      });
    });
  });
});
