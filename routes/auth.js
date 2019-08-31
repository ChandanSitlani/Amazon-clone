var express=require('express'),
bodyParser=require('body-parser'),
passport=require('passport'),
router=express.Router();
var mongoose=require('mongoose');
var user=require('../models/user');


router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

router.get('/signup',function(req,res)
{
	res.render('form');
});
router.post('/signup',function(req,res)
{
user.register(new user({username:req.body.username,email:req.body.email}),req.body.password,function(err,user)
{
if(!err)
{passport.authenticate("local")(req,res,function(){
	console.log("Done");
res.send("Done");
});
}
else 
	console.log("error",err);});
});

router.post('/login',function(req,res)
{
	if(req.user)
		res.render('dashboard',{req});
	else
		res.render('login');
});
module.exports=router;


