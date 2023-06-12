//fake data tour
const fakeData = require("./fakedata/fakeToursdata.json");

//Thêm thư viện
const express = require("express");
const ejs = require("ejs");
const ejsLayouts = require("express-ejs-layouts");

const app = express();

//template engine
app.set("views", "./views/layouts");
app.set("view engine", "ejs");
app.use(ejsLayouts);

//Static file
app.use("/public", express.static(__dirname + "/public"));
const PORT = 3000;


//Get home page
app.get("/", (req, res) => {
  return res.render("../index",{title: 'Trang chủ' , tours:fakeData});
});


app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
