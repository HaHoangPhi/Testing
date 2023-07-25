const express = require("express");
const app = express();
const userAgent = require("express-useragent");
const ejs = require("ejs");
const helmet = require("helmet");
const ejsLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
require("dotenv").config();

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

//hadling error

const sendMail = require("./mail");


//template engine
app.set("views", "./src/views/layouts");
app.set("view engine", "ejs");
app.use(ejsLayouts);

app.post("/", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  await sendMail(data);
  res.json({ ok: true });
});

const homerouter = require("./routes/home.router");
app.use("/", homerouter);

app.get("/login", (req, res) => {
  res.render("../pages/login", { title: "login page" });
});

app.post("/", (req, res) => {
  const hovaten = req.body;
  console.log(hovaten);
  res.redirect("/");
});

module.exports = app;
