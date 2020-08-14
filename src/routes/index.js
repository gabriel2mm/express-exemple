const express = require('express');
const apiRouter = require('./api/api');


const routes = express.Router();
routes.use(function timeLog(req, res, next) {
  console.debug('Time: ', Date.now(), " User: ", req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  next();
});

routes.use("/api", apiRouter);

module.exports = routes;