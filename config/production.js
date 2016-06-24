'use strict';

// Production specific configuration
// ==================================
module.exports = {
  port: 4000, // change to production port
  domain: '', // insert production domain here
  gulp: {
    paths: [],
    uglify: {
      app: []
    }
  }
};
