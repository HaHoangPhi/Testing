const connection = require('../config/db.config');
const home = function(data){
    this.MaTour = data.MaTour;
    this.TenTour = data.TenTour;
    this.Gia = data.Gia;
    this.Anh = data.Anh;
}
connection.connect;
home.get_all = function(tours){
    const query = `SELECT * FROM DS_TOUR`
    connection.query(query, function(err, data){
        if (err) tours(null);
        else tours(data);
    })
}
module.exports = home;

