Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use(['telescope-lib', 'telescope-base'], ['server']);

  // api.use(['http'], ['server']);

  api.addFiles('vk-music-parse.js');
  api.export(['extendPost']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vk-music-parse');
  api.export(['extendPost']);
  api.addFiles('vk-music-parse-tests.js');
});
