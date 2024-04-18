const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3333, console.log("Running server..."))