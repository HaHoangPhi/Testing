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
module.exports = {
    get_all,
}