require(["jquery", "foo"], function($, foo) {
  $(function() {
    console.log(foo.quxbar());
  });
});
