// import and instantiate express
require('dotenv').config();
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const axios = require("axios");
const cors = require("cors");
const mongoose = require('mongoose');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const auth = require('./auth.js');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
require('./db');
app.use(morgan('dev'));
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
app.use(cookieParser('keyboard cat'));
app.use(session({ 
    resave: false,
    saveUninitialized: true,
    secret: 'secret',
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

const User = mongoose.model('User');

// register (have to add route still)


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
      return done(null, user);
    });
  }
));

// passport.use(new LocalStrategy(
  
//     function(username, password, done) {
//       console.log(username + password)
//       //Search for user
//       User.findOne({where:{email:username}}).success(function(user) {
//         console.log(user)
//         //If no user register a new one
//         if (!user) {
  
//           let today = new Date();
//           const salt = today.getTime();
//           const createdDate = today.toUTCString();
  
//           let newPass = crypto.hashPassword(password, salt);
  
//           let user = User.build({
//             email: username,
//             password: newPass,
//             salt: salt
//           });
  
//           user.save().success(function(savedUser) {
//             console.log('Saved user successfully: %j', savedUser);
//             return done(null, savedUser);
            
//           }).error(function(error) {
//             console.log(error);
//             return done(null, false, { message: 'Something went wrong in registration' });
//           });
//         }
//       });
//     }
//   ));




passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

app.get('/searchpage', cors(), (req, res) => { 
    let drink = req.query.search;
    axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drink}`)
    //axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=martini`)
        .then(function (response) {
            //console.log(response);
            console.log(response.data);
            res.status(200).json(response.data.drinks);
        })
        .catch(function (error) {
            console.log(error);
        });    
});

app.get('/signin', cors(), (req, res) => {
    if (req.user) {
        res.redirect('/accountdetails');
    }
    else {
        res.status(200).json();
    }
});

app.post('/login', 
    passport.authenticate('local', { successRedirect: '/home',
                                    failureRedirect: "http://localhost:3001/login",
                                    })            
);


app.post("/register", cors(), (req, res) => {
  auth.register(req.body.username, req.body.name, req.body.password, (message) => {
    // error callback
    res.redirect('/register');
  }, () => {
      // success callback
      res.redirect('/login');
  });
})




module.exports = app


