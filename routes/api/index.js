const route = require('express').Router();
// This route is /api/

route.use('/users', require('./users'));
route.use('/products', require('./products'));

module.exports = { route };
