const homeModel = require('../model/home.model');
const get_all = function(req, res){
    homeModel.get_all(function(data){
            return res.render('../index',{title: 'Trang chủ' , tours: data });
    });
}
module.exports = {get_all}