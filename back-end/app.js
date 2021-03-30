// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require("cors")
// we will put some server logic here later...
// export the express app we created to make it available to other module

module.exports = app

app.get("/json-example", cors(),(req, res) => {
    // assemble an object with the data we want to send
    console.log(req.body)
    const body = {
      query: req.query.search,
      title: "Hello!",
      heading: "Hello!",
      message: "Welcome to this JSON document, served up by Express",
      imagePath: "/static/images/donkey.jpg",
    }
  
    // send the response as JSON to the client
    res.json(body)
  })
