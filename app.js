'use strict';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
var bodyParser = require('body-parser');


var express = require('express');
var app = express();

app.use(logger('dev'));

//app.set('view engine', 'ejs'); // view engine set up, default is HTML 
app.use(express.static(path.join(__dirname, 'views'))); // static path for views in ./views
// app.set('public', path.join(__dirname, 'views')); // set up static path stablished 



app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:8000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;