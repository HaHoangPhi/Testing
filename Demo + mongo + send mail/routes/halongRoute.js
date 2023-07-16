const express = require('express')
const halongRoute = express.Router();
const productController = require('../controller/productController');

halongRoute.get('/:page',productController.getHalongproduct);


module.exports = halongRoute