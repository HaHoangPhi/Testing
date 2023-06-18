const homecontroller = require('../controller/homecontroller');
const express = require('express');
const homerouter = express.Router();
homerouter.get('/', homecontroller.get_all);
module.exports = homerouter;