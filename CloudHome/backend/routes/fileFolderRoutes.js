const express = require('express');
const { getFileFolders } = require('../controllers/filefolderControllers');


const filefolderRouter = express.Router();

filefolderRouter.route("/").get(getFileFolders);

module.exports = filefolderRouter;