'use strict';

module.exports = (app) => {
  app.get('/', (req, res) => {
    console.log('hallo!!');
    res.status(200).json({message: 'Welcome'});
  })
};