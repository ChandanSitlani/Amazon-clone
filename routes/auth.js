var express=require('express'),
router=express.Router();
var mongoose=require('mongoose');
var user=require('../models/user');

router.get('/signup',function(req,res)
{
	res.render('form');
});
router.post('/signup',function(req,res)
{
user.register(new user({name:req.body.name,email:req.body.email}),req.body.password,function(err,user)
{
if(!err)
{passport.authenticate("local")(req,res,function(){
	console.log("Done");
res.send("Done");
});
}
else 
	console.log("error");});
});
module.exports=router;


