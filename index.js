const express = require('express');
 const bodyParser = require('body-parser');
 const cookieParser = require('cookie-parser');
 const session = require('express-session');
 const fs = require('fs');

const route = require('./src/routes/route')
const app = express();
const mongoose=require('mongoose')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);
app.use(cookieParser());
app.use(
  session({
    secret: 'sid123',
    resave: true,
    saveUninitialized: true,
  })
);


 app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})