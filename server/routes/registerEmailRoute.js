
var Register = require('../models/registerEmailModel');
var config= require('../config');
var AWS = require('aws-sdk');


AWS.config.update({accessKeyId: config.aws.accessKeyId , secretAccessKey: config.aws.secretAccessKey});
console.log(config.aws.region);
AWS.config.update({region: config.aws.region});


var sns = new AWS.SNS();


var params = {Message:'',
	MessageStructure: 'json',
  	Subject: 'You got a Message',
  	 MessageStructure: 'json',
  	TopicArn: 'arn:aws:sns:us-west-2:663440390276:registeruser'
  }



var createMsgFromJson = function(data){
	var msg = "";
    //madatory fields
    msg += data.name +" has sent you a message" + "\nemail " + data.email + "\nphone"+ data.phone ;
	return msg;


}

var registerEmailRoute = function(route){
	route
	.post('/register',function(req,res){
		var register = new Register(req.body);
		register.save(function(err,data){
			if(err){
				res.status(500).send(err);
			}
			else{
				var msg = createMsgFromJson(data);
				params.Message = JSON.stringify({default:msg});
				console.log(params.Message);
				sns.publish(params, function(err, data) {
  					if (err) console.log(err, err.stack); // an error occurred
  					else     console.log(data);           // successful response
				});
				res.status(200).send(data);
			}
		});

	})
}

module.exports = registerEmailRoute;