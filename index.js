const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send("Hello World");
});

app.listen(5000, ()=> console.log("Running Sucessfully on PORT 5000 !!"));  // npm run dev
