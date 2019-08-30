var express=require('express'),
app=express(),

localStratergy=require('passport-local'),
user=require('./models/user'),
authRoutes=require('./routes/auth'),
bodyParser=require('body-parser'),
mongoose=require('mongoose');;

mongoose.connect('mongodb://localhost:27017/amazon_clone');
var db=mongoose.connection;
db.on('error',function(err){console.log(err);});
db.once('open',function(err,res){
	console.log("DB Connected");
});
app.get('/',function(req,res)
{
	res.send("Hello");
});
app.listen(3000,function(err)
{
	if(!err)
console.log("serving on 3000");
});