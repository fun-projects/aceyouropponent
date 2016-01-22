
var Instructor = require('../models/instructorModel');


var instructorRoute = function(route){
	route
	.get('/instructor',function(req,res){
		Instructor.find({},function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		})
	})
	.get('/instructor/location',function(req,res){
		
	})
	.post('/instructor',function(req,res){
		var instructor = new Instructor(req.body);
		instructor.save(function(err,data){
			if(err)
				res.status(500).send(err);
			else
				res.status(200).send(data);
		})
	})
}


module.exports = instructorRoute;