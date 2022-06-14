'use strict';
var express = require('express');
var router = express.Router();

var _sqlPackage = require('mysql')
var _config = require('../database/database.js');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
