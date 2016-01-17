
var RegisterModel = require('../models/registerEmailModel');


var registerEmailRoute = function(route){
	route
	.post('/register',function(req,res){
		var register = new RegisterModel(req.body);
		register.save(function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		});

	})
	.get('/test',function(req,res){
		res.status(200).send("this is test");
	});
}

module.exports = registerEmailRoute;