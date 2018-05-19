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

require('./routes/toDoRoutes')(app);

app.get('/api/task', (req,res) => {
  res.send(req.task_list);
});

app.listen(5000, ()=> console.log("Running Sucessfully on PORT 5000 !!"));  // npm run dev
