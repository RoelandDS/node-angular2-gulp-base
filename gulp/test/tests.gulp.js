'use strict';

const mocha = require('gulp-mocha');

const confTest = require('./../../config/test');

module.exports = function (gulp) {
  // test tasks
  return gulp.src(confTest.gulp.tests, {read: false})
    .pipe(mocha({reporter: 'spec'}));
};
