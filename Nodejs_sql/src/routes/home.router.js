const homecontroller = require('../controller/homecontroller');
const express = require('express');
const homerouter = express.Router();
homerouter.get('/', homecontroller.get_all);
homerouter.get('/HaLong',homecontroller.get_HaLong);
homerouter.get('/TimKiem',homecontroller.get_Search);
module.exports = homerouter;