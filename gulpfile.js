'use strict';

const gulp = require('gulp');
const pm2 = require('pm2');
const confDev = require('./config/development');
const confProd = require('./config/production');
const confTest = require('./config/testing');

gulp.task('dev', ['dev:pm2']);

// dev tasks
gulp.task('dev:pm2', () => {
  pm2.connect(true, () => {
    pm2.start({
      'name': 'name.of.app',
      'script': 'server.js',
      'instances': 1,
      'exec_mode': 'cluster',
      'watch': true,
      'env':{
        'NODE_ENV': 'development',
      }
    }, () => {
      console.log('started in development mode');
      pm2.streamLogs('all', 0);
    })
  })
});