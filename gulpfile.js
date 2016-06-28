'use strict';

const gulp = require('gulp');

gulp.task('dev', () => {
  require('./gulp/development.gulp.js')(gulp);
});

gulp.task('test', () => {
  require('./gulp/test.gulp.js')(gulp);
});

