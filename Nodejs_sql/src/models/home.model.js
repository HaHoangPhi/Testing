const connection = require('../database/dbConnect');
const home = function(chuongtrinh_tour){
    this.ma_tour = chuongtrinh_tour.ma_tour;
    this.ten_tour = chuongtrinh_tour.ten_tour;
    this.gia = chuongtrinh_tour.gia;
    this.hinh_anh = chuongtrinh_tour.hinh_anh;
    this.noidung = chuongtrinh_tour.noidung;
}
connection.connect;
home.get_all = function(tours){
    const query = `select chuong_trinh_tour.ma_tour,chuong_trinh_tour.ten_tour,chuong_trinh_tour.gia,chuong_trinh_tour.hinh_anh
    ,chuong_trinh_tour.noidung, count(*) as soluong from dat_tour,chuong_trinh_tour where chuong_trinh_tour.ma_tour = dat_tour.ma_tour group by dat_tour.ma_tour order by soluong desc limit 4`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
home.get_top_HaLong = function(tours){
    const query = `select chuong_trinh_tour.ma_tour,chuong_trinh_tour.ten_tour,chuong_trinh_tour.gia,chuong_trinh_tour.hinh_anh
    ,chuong_trinh_tour.noidung, count(*) as soluong from dat_tour,chuong_trinh_tour where chuong_trinh_tour.ma_tour = dat_tour.ma_tour AND chuong_trinh_tour.ten_tour like '%ha long%' group by dat_tour.ma_tour order by soluong desc limit 4`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
home.get_top_Sapa = function(tours){
    const query = `select chuong_trinh_tour.ma_tour,chuong_trinh_tour.ten_tour,chuong_trinh_tour.gia,chuong_trinh_tour.hinh_anh
    ,chuong_trinh_tour.noidung, count(*) as soluong from dat_tour,chuong_trinh_tour where chuong_trinh_tour.ma_tour = dat_tour.ma_tour AND chuong_trinh_tour.ten_tour like '%Sapa%' group by dat_tour.ma_tour order by soluong desc limit 4`
    connection.query(query, function(err, data){
        if (err) tours(null);   
        else tours(data);
    })
}
home.get_Search = function(tours, nametour){
    const query = `select chuong_trinh_tour.ma_tour,chuong_trinh_tour.ten_tour,chuong_trinh_tour.gia,chuong_trinh_tour.hinh_anh,chuong_trinh_tour.noidung from chuong_trinh_tour
    where ten_tour like '%${nametour}%' or ten_diemdl like'%${nametour}%'`
    console.log(nametour);
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
home.get_Search2 = function(tours, nametour, nametour2){
    const query = `select chuong_trinh_tour.ma_tour,chuong_trinh_tour.ten_tour,chuong_trinh_tour.gia,chuong_trinh_tour.hinh_anh,chuong_trinh_tour.noidung from chuong_trinh_tour
    where ten_tour like '%${nametour}%' or ten_diemdl like'%${nametour2}%'`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
module.exports = home;

