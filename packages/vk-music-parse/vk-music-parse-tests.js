// Write your tests here!
// Here is an example.
if (Meteor.isServer) {
  Tinytest.add('example', function (test) {
    extendPost({url: 'http://vk.com/wall-35486626_174429'})
    test.equal(true, true);
  });
}
