const mysql = require('mysql');
 const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Phi12345',
    database: 'webtour'
 });
 
connection.connect(function(err) {
    if (err) throw err;
    else console.log("kết nối thành công");
});
module.exports = connection;