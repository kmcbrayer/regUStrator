// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict'

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/lib/angular.js',
      'app/lib/jquery.js',
      'app/lib/three.js',
      'app/lib/angular-mocks.js',
      'app/lib/angular-cookies.js',
      'app/lib/angular-route.js',
      'app/lib/angular-sanitize.js',
      'app/lib/angular-resource.js',
      'app/lib/angular-touch.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/three/three.js',
      'app/three/helvetiker_regular.typeface.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      //'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8088,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
