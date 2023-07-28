const homeModel = require("../models/home.model");
const get_all = async function (req, res) {
  const userAgent = req.useragent;
  if (userAgent.isMobile) {
    //get first 4 tours for Mobile view
    await homeModel.get_all(function (datatour) {
      homeModel.get_top_HaLong(function (datahalong) {
        homeModel.get_top_Sapa(function (dataSapa) {
          return res.render("../clientViews/index", {
            title: "Trang chủ",
            tournoibat: datatour,
            tourhalongs: datahalong,
            tourSapa: dataSapa,
          });
        });
      });
    });
  } else {
    //get first 8 tours for Desktop view
    await homeModel.get_all(function (datatour) {
      homeModel.get_top_HaLong(function (datahalong) {
        homeModel.get_top_Sapa(function (dataSapa) {
          return res.render("../clientViews/index", {
            title: "Trang chủ",
            tournoibat: datatour,
            tourhalongs: datahalong,
            tourSapa: dataSapa,
          });
        });
      });
    });
  }
};
const get_HaLong = async function (req, res) {
  const tourname = "Ha Long";
  await homeModel.get_Search(function (data) {
    return res.render("../pages/tour-ha-long", {
      title: "Tour Ha Long",
      tours: data,
    });
  }, tourname);
};
const get_Search = function (req, res) {
  const nametour = req.query.tourname;
  const nametour2 = req.query.tourname2;
  if (nametour2 == undefined) {
    homeModel.get_Search(function (data) {
      return res.render("../pages/tour-ha-long", {
        title: "Tour tìm kiếm",
        tours: data,
        Tieudes: `${nametour}`,
      });
    }, nametour);
  } else {
    homeModel.get_Search2(
      function (data) {
        return res.render("../pages/tour-ha-long", {
          title: "Tour tìm kiếm",
          tours: data,
          Tieudes: `${nametour + " " + nametour2}`,
        });
      },
      nametour,
      nametour2
    );
  }
};
module.exports = {
  get_all,
  get_HaLong,
  get_Search,
};
