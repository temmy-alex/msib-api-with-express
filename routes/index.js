const route = require('express').Router();
const movieRoute = require('./movie');

route.use('/movie', movieRoute);

module.exports = route;