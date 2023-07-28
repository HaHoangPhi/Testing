const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views');
app.set('view engine','ejs')
//admin//
const ctt_router = require('./router/Chuong_trinh_tour_router');
app.use('/admin',ctt_router);
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
});