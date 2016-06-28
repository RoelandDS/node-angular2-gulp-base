'use strict';

const gulp = require('gulp');
const reqDir = require('require-dir');

gulp.task('dev', () => {
  const tasks = reqDir('./gulp/development');
  for (let task in tasks){
    tasks[task](gulp);
  }
});

gulp.task('test', () => {
  const tasks = reqDir('./gulp/test');
  for (let task in tasks){
    tasks[task](gulp);
  }
});

