// import and instantiate express
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
// import mocha and chai
const bcrypt = require('bcryptjs');
// const chai = require('chai');
// const expect = chai.expect; 
// const mock = require('mock-require');
// const User = require('./mock-user.js').User;
// const { assert } = require("console");
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

const User = mongoose.model('User');

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

app.get('/signin', (req, res) => {
    if (req.user) {
        res.redirect('/accountdetails');
    }
    else {
        res.status(200).json();
    }
});

app.post('/login',
    passport.authenticate('local', { successRedirect: '/home',
                                    failureRedirect: '/login',
                                    })
);

// cocktail search unit test
// describe("cocktail search",function(){
//     describe("successful search",function(){
//         it("should return an array of martini objects", function(){
//             const drink = "martini"
//             let resp = {};
//             axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drink}`)
//             .then(function (response) {
//                 resp = response.data.drinks[0]
//             });
//             assert.equal("Martini",response.drinks[0].strDrink);
//         });
//     });

//     describe("unsuccessful search",function(){
//         it("should return null", function(){
//             const drink = "fysdufjslf"
//             let resp = {};
//             axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drink}`)
//             .then(function (response) {
//                 resp = response.data.drinks[0]
//             });
//             assert.equal(null,response.drinks);
//         });
//     });
// });



module.exports = app


