'use strict';

const pm2 = require('pm2');
const mocha = require('gulp-mocha');

const confTest = require('./../config/test');

module.exports = function (gulp) {
  // test tasks
  pm2.connect(true, () => {
    pm2.start({
      'name': 'name.of.app-test',
      'script':  __dirname + '/../server.js',
      'instances': 1,
      'exec_mode': 'cluster',
      'watch': true,
      'env':{
        'NODE_ENV': 'test',
      }
    }, () => {
      pm2.streamLogs('all', 0);
      gulp.src(confTest.gulp.tests, {read: true})
        .pipe(mocha({reporter: 'spec'}));
    });
  });



};
