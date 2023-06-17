//fake data tour
const fakeData = require("./fakedata/fakeToursdata.json");

//Thêm thư viện
const express = require("express");
const ejs = require("ejs");
const ejsLayouts = require("express-ejs-layouts");
const nodeMailer = require("nodemailer");

const app = express();

//template engine
app.set("views", "./views/layouts");
app.set("view engine", "ejs");
app.use(ejsLayouts);

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static file
app.use("/public", express.static(__dirname + "/public"));

const PORT = 3000;

//nodemailer

//Get home page
app.get("/", (req, res) => {
  return res.render("../index", { title: "Trang chủ", tours: fakeData });
});

app.post("/",(req, res) => {
  const hovaten = req.body;
  console.log(hovaten);
  res.redirect('/')
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
