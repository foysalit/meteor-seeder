Package.describe({
  name: 'foysal:seeder',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Seed meteor collection automatically from simple schema.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/foysalit/meteor-seeder',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'underscore', 'check', 'aldeed:simple-schema@1.3.3']);
  api.use(['practicalmeteor:faker@3.0.1_1'], ['server']);
  api.addFiles('seeder.js', ['server']);
  api.export('Seeder', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('foysal:seeder');
  api.addFiles('seeder-tests.js');
});
