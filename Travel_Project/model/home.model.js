const connection = require('../config/db.config');
const home = function(chuongtrinh_tour){
    this.ma_tour = chuongtrinh_tour.ma_tour;
    this.ten_tour = chuongtrinh_tour.ten_tour;
    this.gia = chuongtrinh_tour.gia;
    this.hinhanh = chuongtrinh_tour.hinhanh;
    this.noidung = chuongtrinh_tour.noidung;
}
connection.connect;
home.get_all = function(tours){
    const query = `select chuongtrinh_tour.ma_tour,chuongtrinh_tour.ten_tour,chuongtrinh_tour.gia,chuongtrinh_tour.hinhanh
    ,chuongtrinh_tour.noidung, count(*) as soluong from dat_tour,chuongtrinh_tour where chuongtrinh_tour.ma_tour = dat_tour.ma_tour group by dat_tour.ma_tour order by soluong desc limit 4`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
home.get_top_HaLong = function(tours){
    const query = `select chuongtrinh_tour.ma_tour,chuongtrinh_tour.ten_tour,chuongtrinh_tour.gia,chuongtrinh_tour.hinhanh
    ,chuongtrinh_tour.noidung, count(*) as soluong from dat_tour,chuongtrinh_tour where chuongtrinh_tour.ma_tour = dat_tour.ma_tour AND chuongtrinh_tour.ten_tour like '%ha long%' group by dat_tour.ma_tour order by soluong desc limit 4`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
home.get_top_Sapa = function(tours){
    const query = `select chuongtrinh_tour.ma_tour,chuongtrinh_tour.ten_tour,chuongtrinh_tour.gia,chuongtrinh_tour.hinhanh
    ,chuongtrinh_tour.noidung, count(*) as soluong from dat_tour,chuongtrinh_tour where chuongtrinh_tour.ma_tour = dat_tour.ma_tour AND chuongtrinh_tour.ten_tour like '%sapa%' group by dat_tour.ma_tour order by soluong desc limit 4`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
module.exports = home;

