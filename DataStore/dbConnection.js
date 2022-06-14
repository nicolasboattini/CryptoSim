const mysql = require('mysql');
const dotenv = require('dotenv');

const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  db: 'cryptosim'
}); // Crea la conexion a la base de datos utilizando los datos de datos

pool.connect((err, connection) => {
  //Probar si se pierde la conexion
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has to many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  } else {
    console.log("DB is Connected");
  }
});

module.exports = pool;


