const express = require('express')
const sapaRoute = express.Router();

const productController = require('../controller/productController');
sapaRoute.get('/',productController.getSapaproduct);


module.exports = sapaRoute