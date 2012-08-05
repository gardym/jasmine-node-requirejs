var requirejs = require('./requirejs_helper').requirejs;

requirejs(['foo_view'], function(FooView) {
  describe('FooView', function() {
    describe('foo_html', function() {
      describe('when created with a foo', function() {
        var stub_foo;
        beforeEach(function() {
          stub_foo = { bar: jasmine.createSpy('bar').andReturn('fake bar') }
        });
        it('wraps foo.bar() in a paragraph', function() {
          var foo_view = new FooView(stub_foo)
          expect(stub_foo.bar).toHaveBeenCalled();
          expect(foo_view.foo_html).toEqual('<p>fake bar</p>');
        });
      });
    });
  });
});
