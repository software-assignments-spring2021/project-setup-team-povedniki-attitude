// const express = require("express"); // CommonJS import style!
// const app = express(); // instantiate an Express object
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');
// const axios = require("axios");
// const cors = require("cors");
// const mongoose = require('mongoose');
// const flash = require('connect-flash');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// // import mocha and chai
// const bcrypt = require('bcryptjs');
// const chai = require('chai');
// const expect = chai.expect; 
// const mock = require('mock-require');
// const User = require('./mock-user.js').User;
// const { assert } = require("console");
// const passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;
// require('../db');
// app.use(morgan('dev'));
// app.use(express.json()) // decode JSON-formatted incoming POST data
// app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
// app.use(cookieParser('keyboard cat'));
// app.use(session({ 
//     resave: false,
//     saveUninitialized: true,
//     secret: 'secret',
// }));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());

const bcrypt = require('bcryptjs');
const chai = require('chai');
const expect = chai.expect; 
const mock = require('mock-require');
const User = require('./mock-user.js').User;

mock('mongoose', { 
  model() {
    return User;
  },
  connect() { }
});

function failOnError(done, err) { 
    // we shouldn't get an error!
    expect.fail('error', 'success', 'expected success, but got error ' + JSON.stringify(err) + err);
    done();
}

function failOnSuccess(done, user) { 
    expect.fail('success', 'error', 'expected error, but got success ' + JSON.stringify(user));
    done();
}

// cocktail search unit test
describe("cocktail search",function(){
    describe("successful search",function(){
        it("should return an array of martini objects", function(){
            const drink = "martini"
            let resp = {};
            axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drink}`)
            .then(function (response) {
                resp = response.data.drinks[0]
            });
            assert.equal("Martini",response.drinks[0].strDrink);
        });
    });

    describe("unsuccessful search",function(){
        it("should return null", function(){
            const drink = "fysdufjslf"
            let resp = {};
            axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drink}`)
            .then(function (response) {
                resp = response.data.drinks[0]
            });
            assert.equal(null,response.drinks);
        });
    });
});
