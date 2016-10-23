const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');



const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cookieParser());



app.use(morgan('dev'));

module.exports = app;
