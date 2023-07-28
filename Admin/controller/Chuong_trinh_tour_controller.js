const { Types } = require('mysql');
const ctt_models = require('../models/Chuong_trinh_tour_models');
const get_all_ctt = function (req,res) {
    ctt_models.get_all_ctt(function (data) {
        res.render('Admin_views/Chuong_trinh_tour',{title:"Trang quản trị", chuong_chinh_tours:data})
    });
}
const get_add_ctt = function (req, res) {
    res.render('Ev_Chuong_trinh_tour/Them_ctt');
}
const add_ctt = function (req, res) {
    if(req.file != undefined)
    {
        const file = req.file;
        const ctt = {
            ten_tour: req.body.ten_tour,
            gia: req.body.gia,
            hinh_anh: file.path,
            noidung: req.body.noidung,
            ten_diemdl: req.body.ten_diemdl 
        }
        if(ctt.ten_tour != undefined && ctt.gia != undefined && ctt.hinh_anh != undefined && ctt.noidung != undefined && ctt.ten_diemdl != undefined) {
            try{
                ctt_models.add_ctt(ctt);
                return res.redirect('/admin/Chuong_trinh_tour');    
            }
            catch{
                console.log('Error');
            }
        }
    }   
    else{
        
    }    
}
const show_update_ctt = function(req, res){
    const mt = req.params.ma_tour;
    ctt_models.show_update_ctt(function (data) {
        res.render('Ev_Chuong_trinh_tour/Sua_ctt',{title:"Trang quản trị", Updates:data})
    },mt);
}
const update_ctt = function (req, res) {
    if(req.file != undefined)
    {
        const file = req.file;
        const ctt = {
            ma_tour:req.params.ma_tour,
            ten_tour: req.body.ten_tour,
            gia: req.body.gia,
            hinh_anh: file.path,
            noidung: req.body.noidung,
            ten_diemdl: req.body.ten_diemdl 
        }
        if(ctt.ten_tour != undefined && ctt.gia != undefined && ctt.hinh_anh != undefined && ctt.noidung != undefined && ctt.ten_diemdl != undefined) {
            try{
                ctt_models.update_ctt(ctt);
                return res.redirect('/admin/Chuong_trinh_tour');    
            }
            catch{
                console.log('Error');
            }
        }
    }   
    else{
        
    }    
}
const delete_ctt = function(req, res){
    const mt = req.params.ma_tour;
    try{
        ctt_models.delete_ctt(mt);
        return res.redirect('/admin/Chuong_trinh_tour'); 
    }catch{

    }
}
module.exports = {
    get_all_ctt,
    get_add_ctt,
    add_ctt,
    show_update_ctt,
    update_ctt,
    delete_ctt,
};