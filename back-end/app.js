// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const axios = require("axios");
const cors = require("cors")
// import mocha and chai
const bcrypt = require('bcryptjs');
// const chai = require('chai');
// const expect = chai.expect; 
// const mock = require('mock-require');
// const User = require('./mock-user.js').User;
// const { assert } = require("console");

// we will put some server logic here later...
// export the express app we created to make it available to other module
app.use(morgan('dev'));
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// app.post('/signup', (req, res) => {
//     console.log(req.body);
//     res.status(200).json({message: 'hello'});

// })

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


