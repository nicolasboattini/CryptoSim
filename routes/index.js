'use strict';
var express = require('express');
var router = express.Router();

var mysql = require("mysql");

var myConnection  = require('express-myconnection');

var dbConnection = mysql.createConnection({
  host:      'localhost',         // database host
  user:       'root',         // your database username
  password: 'ale24853NIC666',         // your database password
  port:       3306,               // default MySQL port
  db:       'cryptosim'         // your database name
});

 var dbOptions = {
    host:      dbConnection.host,
    user:       dbConnection.user,
    password: dbConnection.password,
    database: dbConnection.db
                }

const app = express();
app.use(myConnection(mysql, dbOptions, 'pool'));

/* GET home page. */
router.get('/', function (req, res) {
dbConnection.connect(dbConnection()).then(() => {
    return dbConnection.query`SELECT name FROM tarjeta_grafica`
}).then(result => {
    console.log(result); 
    // Pass the DB result to the template
    res.render('/index', {dropdownVals: result.recordset});
}).catch(err => {
    console.log(err)
})
});
module.exports = router;
/* GET home page.
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;*/
