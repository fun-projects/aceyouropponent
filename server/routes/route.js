var express 	= require('express');
var router 		= express.Router();
var path 		= require('path');



//welcome page
router.get('/', function(req, res) {
  res.sendFile('index.html',{root: path.join(__dirname,'./../../tennis-portal-app/app')});
});



require('./registerEmailRoute')(router);
require('./instructorRoute')(router);

module.exports = router;