const express = require('express')
const trongnuocRoute = express.Router();
const productController = require('../controller/productController');

trongnuocRoute.get('/:page',productController.getTrongnuocproduct);


module.exports = trongnuocRoute