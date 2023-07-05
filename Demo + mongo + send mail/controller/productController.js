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

  let count = await productModel.countDocuments();
  console.log(count);

  res.render("../pages/tour-ha-long", {
    title: "Đặt Tour hạ long",
    tours: data,
    current: page,
    pages: Math.ceil(count / perPage),
  });
};

const getSapaproduct = async (req, res) => {
  const data = await productModel.find();
  return res.render("../pages/tour-sapa", {
    title: "Đặt Tour Sapa",
    tours: data,
  });
};

const getTrongnuocproduct = async (req, res) => {
  let page = req.params.page || 1;
  let perPage = 16;
  const data = await productModel
    .find()
    .skip(perPage * page - perPage)
    .limit(perPage);

  let count = await productModel.countDocuments();
  console.log(count);

  res.render("../pages/tour-trong-nuoc", {
    title: "Đặt Tour trong nước",
    tours: data,
    current: page,
    pages: Math.ceil(count / perPage),
  });
};

const getNuocngoaiproduct = async (req, res) => {
  let page = req.params.page || 1;
  let perPage = 16;
  const data = await productModel
    .find()
    .skip(perPage * page - perPage)
    .limit(perPage);

  let count = await productModel.countDocuments();
  console.log(count);

  res.render("../pages/tour-nuoc-ngoai", {
    title: "Đặt Tour nước ngoài",
    tours: data,
    current: page,
    pages: Math.ceil(count / perPage),
  });
};

const getTourkhacproduct = async (req, res) => {
  let page = req.params.page || 1;
  let perPage = 16;
  const data = await productModel
    .find()
    .skip(perPage * page - perPage)
    .limit(perPage);

  let count = await productModel.countDocuments();
  console.log(count);

  res.render("../pages/tour-khac", {
    title: "Đặt Tour khác",
    tours: data,
    current: page,
    pages: Math.ceil(count / perPage),
  });
};



module.exports = {
  getHomeproduct,
  getHalongproduct,
  getSapaproduct,
  getNuocngoaiproduct,
  getTrongnuocproduct,
  getTourkhacproduct
};
