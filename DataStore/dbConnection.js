const mysql = require('mysql');
const dotenv = require('dotenv');

const pool = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cryptosim'
}); // Crea la conexion a la base de datos utilizando los datos de la variable de entorno

/*pool.connect((err, connection) => {
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
});*/

module.exports = pool;


