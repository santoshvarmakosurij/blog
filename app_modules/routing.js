//inbuilt or external module
var express = require('express');

//custom modules
var models = require('./models');

//router configuration
var router = express.Router();

var globalConfig  = Object.create(null);

models.M.User.findOne({ userName: "SantoshVarmaKosuriJ" }, 'nickName userName', function(err, user) {
  if (!user) {
   console.log("Create user");
   var user = new models.M.User({
		nickName:  "Santosh Varma Kosuri J",
		email:  ("santoshvarma.private@gmail.com").toLowerCase(),
		userName:  "SantoshVarmaKosuriJ"
	}); 
   user.save(function(err) {
   	 if(!!err){
   	 	console.log("error occured");
   	 }
   });
  }
  globalConfig.nickName = user.nickName;
});

//routing and management of application
router.get('/',function(req,res){
  res.redirect('/home');
});

router.get('/home',function(req,res){
  res.render('home',{nickname : globalConfig.nickName});
});

module.exports = router;