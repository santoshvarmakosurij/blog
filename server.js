var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongoose = require('mongoose');
var favicon = require('express-favicon');

//custom modules
var router = require('./app_modules/routing.js');

var app = express();
var port = process.env.PORT || 3333;

//db connection
mongoose.connect('mongodb://santoshvarmakosurij:santoshvarmakosurij@ds021943.mlab.com:21943/santoshvarmakosurijblog');

//favicon
app.use(favicon(__dirname + '/site/resources/images/favicon.ico')); 

//using static files
app.use(express.static(path.join(__dirname,'/site/resources')));

//configure app
app.set('views', path.join(__dirname, '/site/views'));
app.set('view engine', 'ejs');
app.set('view cache',false);

app.use(bodyParser.urlencoded({ extended: true }));

//use the router module
app.use(router);

var http = require('http').Server(app);

// start the server at localhost:3333
http.listen(port, function(){
  console.log('server is running at http://127.0.0.1:3333');
});
