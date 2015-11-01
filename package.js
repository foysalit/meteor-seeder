Package.describe({
  name: 'foysal:seeder',
  version: '0.0.3',
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
  api.use(['ecmascript', 'underscore', 'check', 'mongo']);
  api.use([
    'practicalmeteor:faker@3.0.1_1', 
    'aldeed:simple-schema@1.3.3'
  ], ['server']);
  api.addFiles('seeder.js', ['server']);
  api.export('Seeder', ['server']);
});

Package.onTest(function(api) {
  api.use([
    'ecmascript', 
    'mongo', 
    'aldeed:simple-schema@1.3.3', 
    'aldeed:collection2@2.5.0'
  ]);
  api.use('tinytest');
  api.use('foysal:seeder');
  api.addFiles('seeder-tests.js', ['server']);
});
