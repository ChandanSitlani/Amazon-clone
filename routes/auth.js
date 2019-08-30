var express=require('express'),
router=express.Router();
var user=require('../models/user');
router.get('/signup',function(req,res)
{
user.register(new user({name:req.body.name,email:req.body.email}),req.body.password,function(err,user)
{
if(!err)
{passport.authenticate("local")(req,res,function(){
res.send("Done");
});
}});
});

module.exports=router;


