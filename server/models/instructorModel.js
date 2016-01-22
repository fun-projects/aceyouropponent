var config= require('../config');
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


//mongoose.connect(config.mongodb.uri);


var instructorModel = new Schema({
	fname:{type:String,required:true},
	lname:{type:String,required:true},
	phone:{type:String,required:true},
	email:{type:String,required:true},
	phone2:{type:String},
	latitude: {type:Number},
	longitude:{type:Number},
	radius:{type:Number},
	aboutme:{type:String},
	aboutmeless:{type:String},
	avathar:{type:String},
	testimonials:[Schema.Types.ObjectId]
});

module.exports  = mongoose.model('instructors',instructorModel);