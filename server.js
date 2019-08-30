var express=require('express'),
app=express(),
bodyParser=require('body-parser');
app.get('/',function(req,res)
{
	res.send("Hello");
});
app.listen(3000,function(err)
{
	if(!err)
console.log("serving on 3000");
});