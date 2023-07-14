//fake data tour
const fakeData = require("./fakedata/fakeToursdata.json");
const bodyParser = require("body-parser");
//Thêm thư viện
const express = require("express");
const ejs = require("ejs");
const ejsLayouts = require("express-ejs-layouts");

const app = express();

//template engine
app.set("views", "./views/layouts");
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static file
app.use("/public", express.static(__dirname + "/public"));

const PORT = 3000;

//nodemailer
const homerouter = require('./router/home.router');
app.use('/',homerouter);

app.post("/",(req, res) => {
  const hovaten = req.body;
  console.log(hovaten);
  res.redirect('/')
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
