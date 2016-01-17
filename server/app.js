

var express 	= require('express');
var routes 		= require('./routes/route');
var bodyParser	= require('body-parser');
var app 		= express();
var path 		= require('path');
var morgan       = require('morgan');
var passport = require('passport');


//middleware
app.use('/', express.static(path.join(__dirname,'./../tennis-portal-app/app')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',routes);



//create and start server
var port   = process.env.PORT || 3000;
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Job App listening at http://%s:%s', host, port);

});