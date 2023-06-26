//fake data tour
const fakeData = require("./fakedata/fakeToursdata.json");

//Thêm thư viện
const express = require("express");
const ejs = require("ejs");
const helmet = require('helmet');
const ejsLayouts = require("express-ejs-layouts");
const morgan = require('morgan');
require('dotenv').config();

/*Routes*/
const halongRoute = require('./routes/halongRoute');
const sapaRoute = require('./routes/sapaRoute');

const productController = require('./controller/productController');


const sendMail = require("./mail");
const dbConnect = require('./dbConnect')

//Khai bao app
const app = express();

//template engine
app.set("views", "./views/layouts");
app.set("view engine", "ejs");
app.use(ejsLayouts);

//
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));


//Static file
app.use("/public", express.static(__dirname + "/public"));

const PORT = 3000;

dbConnect();

//Get home page
app.get("/",productController.getHomeproduct);

app.post("/", async(req, res) => {
  console.log(req.body);
  const data = req.body;
  await sendMail(data);
  res.json({ok:true})
})

app.use('/tours-ha-long',halongRoute);
app.use('/tours-sapa',sapaRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
