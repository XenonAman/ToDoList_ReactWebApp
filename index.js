const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require("./models/User");
require("./models/Todo");

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req,res) => {
  res.send("Hello World");
});

app.listen(5000, ()=> console.log("Running Sucessfully on PORT 5000 !!"));  // npm run dev
