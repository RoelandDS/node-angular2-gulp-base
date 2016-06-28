'use strict';

const pm2 = require('pm2');
const confDev = require('./../../config/development');

module.exports = function (gulp) {
  // dev tasks
  pm2.connect(true, () => {
    pm2.start({
      'name': 'name.of.app-dev',
      'script': __dirname + '/../../server.js',
      'instances': 1,
      'exec_mode': 'cluster',
      'watch': true,
      'env':{
        'NODE_ENV': 'development',
      }
    }, () => {
      console.log('started in development mode');
      pm2.streamLogs('all', 0);
    });
  });


};
