// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const axios = require("axios");

// we will put some server logic here later...
// export the express app we created to make it available to other module
app.use(morgan('dev'));
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

app.post('/', (req, res) => {
    axios
        .get('/searchbyingredient')
        .then(apiResponse => res.json(apiResponse.data))
        .catch(err);
})

module.exports = app