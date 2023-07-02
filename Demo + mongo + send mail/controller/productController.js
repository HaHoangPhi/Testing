const productModel = require("../models/productModel");

const getHomeproduct = async (req, res) => {
  const userAgent = req.useragent;
  if (userAgent.isMobile) {
    //get firt 4 tour for best tour
    const bestTourdata = await productModel.find().skip().limit(4);
    //get 8 for data halong
    const halongData = await productModel.find().skip(4).limit(4);
    //get 8 for data sapa
    const sapaData = await productModel.find().skip(12).limit(4);
    return res.render("../index", {
      title: "Trang chủ",
      tours: bestTourdata,
      halongTours: halongData,
      sapaTours: sapaData,
    });
  } else {
    //get firt 4 tour for best tour
    const bestTourdata = await productModel.find().skip().limit(4);
    //get 8 for data halong
    const halongData = await productModel.find().skip(4).limit(8);
    //get 8 for data sapa
    const sapaData = await productModel.find().skip(12).limit(8);
    return res.render("../index", {
      title: "Trang chủ",
      tours: bestTourdata,
      halongTours: halongData,
      sapaTours: sapaData,
    });
  }
};

const getHalongproduct = async (req, res) => {
  let page = req.params.page || 1;
  let perPage = 16;
  const data = await productModel
    .find()
    .skip(perPage * page - perPage)
    .limit(perPage);
  res.render("../pages/tour-ha-long", {
    title: "Đặt Tour hạ long",
    tours: data,
    page: page,
  });
};

const getSapaproduct = async (req, res) => {
  const data = await productModel.find();
  return res.render("../pages/tour-sapa", {
    title: "Đặt Tour Sapa",
    tours: data,
  });
};

module.exports = {
  getHomeproduct,
  getHalongproduct,
  getSapaproduct,
};
