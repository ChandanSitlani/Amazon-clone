var mongoose=require('mongoose'),
passportLocalMongoose=require('passport-local-mongoose');
var userSchema=new mongoose.Schema({
username:{type:String},
email:{type:String}
});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("user",userSchema);
