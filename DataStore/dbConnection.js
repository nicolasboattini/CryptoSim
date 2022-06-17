const mysql = require('mysql');
require('dotenv').config()

const pool = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'cryptosim'
}); // Crea la conexion a la base de datos utilizando los datos de la variable de entorno


module.exports = pool;


