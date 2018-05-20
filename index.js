const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const keys = require('./config/keys');

require("./models/User");
require("./models/Todo");


mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());  // required for postman   req.body

app.get('/', (req,res) => {
  res.send("Hello World");
});

require('./routes/toDoRoutes')(app); // save data to db (API)


app.listen(5000, ()=> console.log("Running Sucessfully on PORT 5000 !!"));  // npm run dev
