
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
var bodyParser = require('body-parser');


var express = require('express');
var app = express();

var server = {
  port: 3000
};


app.use(logger('dev'));

//app.set('view engine', 'ejs'); // view engine set up, default is HTML 
app.use(express.static(path.join(__dirname, 'views'))); // static path for views in ./views
// app.set('public', path.join(__dirname, 'views')); // set up static path stablished 


//use modules 
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true})) // parsing incoming requests with urlencoded based body-parser
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:8000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//use router
app.use('/index', indexRouter);
app.use('/users', usersRouter);
// router user input
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname,'views') + '/index.html');
});
// starting the server
app.listen( server.port, () => console.log(`Server started, listening port: ${server.port}`));
//module.exports = app;