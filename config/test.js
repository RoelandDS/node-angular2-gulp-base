'use strict';

// Test specific configuration
// ==================================
module.exports = {
  port: 3000, // change to test port
  domain: 'http://localhost:3000', // insert production domain here
  gulp: {
    paths: [],
    uglify: {
      app: []
    },
    tests: ['server/specs/*.spec.js']
  }
};
