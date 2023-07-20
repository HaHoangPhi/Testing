const homeModel = require('../model/home.model');
const get_all = function(req, res){
    homeModel.get_all(function(datatour){
        homeModel.get_top_HaLong(function(datahalong){
            homeModel.get_top_Sapa(function(dataSapa){
                return res.render('../index',{title: 'Trang chủ' , tournoibat: datatour, tourhalongs: datahalong, tourSapa:dataSapa});
            });
        });
    });
}
const get_HaLong = function (req,res){
    const tourname = "Ha Long";
    homeModel.get_Search(function (data){
        return res.render('../pages/tour-ha-long',{title: 'Tour Ha Long',tours:data});
    },tourname)
}
const get_Search = function (req,res){
    const nametour = req.query.tourname;
    const nametour2 = req.query.tourname2;
    if(nametour2 == undefined)
    {
        homeModel.get_Search(function (data){
            return res.render('../pages/tour-ha-long',{title: 'Tour tìm kiếm',tours:data,Tieudes:`${nametour}`});
        },nametour);
    }
    else
    {
        homeModel.get_Search2(function (data){
            return res.render('../pages/tour-ha-long',{title: 'Tour tìm kiếm',tours:data,Tieudes:`${nametour+" "+nametour2}`});
        },nametour,nametour2);
    }
}
module.exports = {
    get_all,
    get_HaLong,
    get_Search,
}