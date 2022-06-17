
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
var bodyParser = require('body-parser');
var pool = require('./DataStore/dbConnection');

var express = require('express');
var app = express();
  
var server = {
  port: 3000
};


app.use(logger('dev'));

app.set('view engine', 'ejs'); // view engine set up, default is HTML 

app.use(express.static(path.join(__dirname, 'public'))); // set up public folder for static files

//Estableces a express que utilice módulos declarados 
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true})) // parsing incoming requests with urlencoded based body-parser
app.use(cookieParser());

//Sentencia para que los datos no tengan inconvenientes al ser llamados
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//use router
app.use('/index', indexRouter);
app.use('/users', usersRouter);
// router user input
app.get('/', function(req, res) {

  var model = {
    tarjetaGrafica: []//Se crea modelo de datos vacío
}
//Trata de conectarse a la DB
  pool.getConnection(function(err, connection) {
  if (err) throw err; //Si no conecta lanza error
 
  //Se hace la petición a la DB
  connection.query('SELECT idTarjeta_Grafica, modelo, serie, marca, consumo, frecuencia_de_hasheo, precio  FROM tarjeta_grafica', function (error, results, fields) {
    model.tarjetaGrafica=results;
    connection.release();
    res.render('pages/index', model);//Se pasa al render el modelo con los datos extraídos
    if (error) throw error;
  });
});
});
//Inicia el server
app.listen( server.port, () => console.log(`Server started, listening port: ${server.port}`));
