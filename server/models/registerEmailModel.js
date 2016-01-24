var config= require('../config');
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


mongoose.connect(config.mongodb.uri);


var registerEmailModel = new Schema({
	name:{type:String,required:true},
	email:{type:String,required:true},
	phone:{type:String,required:true},
	message:{type:String},
	date:{type:Date,default:Date.now}
});

module.exports  = mongoose.model('register_email',registerEmailModel);