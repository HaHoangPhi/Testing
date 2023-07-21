const express = require('express')
const nuocngoaiRoute = express.Router();
const productController = require('../controller/productController');

nuocngoaiRoute.get('/:page',productController.getNuocngoaiproduct);


module.exports = nuocngoaiRoute