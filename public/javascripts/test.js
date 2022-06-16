const pool = require('../DataStore/dbConnection');
const mysql = require('mysql');

var sql = "SELECT ?? FROM ??";
var inserts = ['marca', 'tarjeta_grafica'];
sql = mysql.format(sql, inserts);

//mysql pool query and return data
function query(sql, callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      callback(err, null);
    } else {
      connection.query(sql, (err, rows) => {
        connection.release();
        callback(err, rows);
      });
    }
  });
}