const express = require('express')
const tourkhacRoute = express.Router();
const productController = require('../controller/productController');

tourkhacRoute.get('/:page',productController.getTourkhacproduct);


module.exports = tourkhacRoute