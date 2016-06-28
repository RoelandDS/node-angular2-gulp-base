'use strict';

let request = require('supertest');

request = request('http://localhost:3000');

describe('main', () => {
  it('/ route should respond with 200', (done) => {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done());
  });
});