'use strict';
var express = require('express');
var router = express.Router();

//Hecho por el framework express
//GET home page
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
