const express = require("express");
const app = express();
const userAgent = require("express-useragent");
const ejs = require("ejs");
const helmet = require("helmet");
const ejsLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
require("dotenv").config();

//template engine
app.set("views", "./src/views/layouts");
app.set("view engine", "ejs");
app.use(ejsLayouts);

//init middlewares
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(userAgent.express());
app.use("/public", express.static(__dirname + "/public"));
//init database

//init routes
app.use("/", require("./routes/home.router"));
app.use("/sendmail", require("./routes/sendMail.router"));
//hadling error

module.exports = app;
