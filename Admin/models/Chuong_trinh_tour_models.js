const connection = require('../dbConnect');
const ctt = function(chuongtrinh_tour){
    this.ma_tour = chuongtrinh_tour.ma_tour;
    this.ten_tour = chuongtrinh_tour.ten_tour;
    this.gia = chuongtrinh_tour.gia;
    this.hinh_anh = chuongtrinh_tour.hinh_anh;
    this.noidung = chuongtrinh_tour.noidung;
    this.ten_diemdl = chuongtrinh_tour.ten_diemdl;
}
connection.connect;
ctt.get_all_ctt = function(tours){
    const query = `select * from chuong_trinh_tour`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
ctt.add_ctt = function(ctt_add){
    const query = `INSERT INTO chuong_trinh_tour (ten_tour,gia,hinh_anh,noidung,ten_diemdl)
    VALUES ('${ctt_add.ten_tour}',${Number(ctt_add.gia)},'${ctt_add.hinh_anh}','${ctt_add.noidung}','${ctt_add.ten_diemdl}');`;
    connection.query(query, function(err, data){})
}
ctt.show_update_ctt = function(tours,ma_tour){
    const query = `select * from chuong_trinh_tour where ${ma_tour}`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
ctt.update_ctt = function(ctt_update){
    const query = `update chuong_trinh_tour set ten_tour = '${ctt_update.ten_tour}', gia = ${Number(ctt_update.gia)}, hinh_anh = '${ctt_update.hinh_anh}', noidung = '${ctt_update.noidung}', ten_diemdl = '${ctt_update.ten_diemdl}'
    where ${ctt_update.ma_tour}`;
    connection.query(query, function(err, data){})
}
ctt.delete_ctt = function(ctt_delete){
    const query = `delete from chuong_trinh_tour where ${ctt_delete}`;
    connection.query(query, function(err, data){})
}
module.exports = ctt;   