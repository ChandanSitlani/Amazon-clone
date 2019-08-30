var express=require('express'),
app=express(),

LocalStrategy=require('passport-local'),
passport=require('passport');
user=require('./models/user'),
authRoutes=require('./routes/auth'),
bodyParser=require('body-parser'),
mongoose=require('mongoose');;


app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(passport.initialize());

app.use(passport.session());

passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());

passport.deserializeUser(user.deserializeUser());
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