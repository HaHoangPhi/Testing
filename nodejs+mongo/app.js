//Thêm thư viện
const express = require("express");
const userAgent = require('express-useragent');
const ejs = require("ejs");
const helmet = require('helmet');
const ejsLayouts = require("express-ejs-layouts");
const morgan = require('morgan');
require('dotenv').config();

/*Routes*/


/*Controllers*/

const sendMail = require("./mail");

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
app.use(morgan('dev'));

app.use(userAgent.express());


//Static file
app.use("/public", express.static(__dirname + "/public"));

const PORT = 3000;


app.post("/", async(req, res) => {
  console.log(req.body);
  const data = req.body;
  await sendMail(data);
  res.json({ok:true})
})

const homerouter = require('./routes/home.router');
app.use('/',homerouter);

app.get('/login',(req,res)=>{
  res.render('../pages/login',{title:"login page"});
})

app.post("/",(req, res) => {
  const hovaten = req.body;
  console.log(hovaten);
  res.redirect('/')
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
