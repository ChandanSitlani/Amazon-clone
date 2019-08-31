module.exports =  {
    ensureAuthenticated: function(req ,res ,next) {
        if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'Please login to this resource');
    res.redirect('/users1/login');
},
forwardAuthenticated: function(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/dashboard');
}
};