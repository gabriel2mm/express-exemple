const express = require('express');
const HomeController = require('../../controllers/index');

const apiRouter = express.Router();
apiRouter.get("/", HomeController.homeApi);

module.exports = apiRouter;