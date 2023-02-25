const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//1st Middleware
app.use('/users', (req, res, next) => {
  res.send('<h1>This is the users Page</h1> ');
});
//2nd middlware
app.use('/', (req, res, next) => {
  res.send('<h1>This is the Home Page</h1> ');
});

app.listen(3000);
