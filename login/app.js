const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

//Passport config
require('./config1/passport1')(passport);

//DBCONFIG
const db = require('./config1/keys1').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('Mongodb connected...'))
.catch(err => console.log(err));

mongoose.connection.once('open', function(){
    console.log('Connection is made');
});
//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BODY Parser
app.use(express.urlencoded({extended: false}));

//Express Session
app.use(session({
    secret : 'secret',
    resave: true,
    saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//Routes
app.use('/', require('./routes1/index1'));
app.use('/users1', require('./routes1/users1'));
 const PORT = process.env.PORT || 3000;

 app.listen(PORT);