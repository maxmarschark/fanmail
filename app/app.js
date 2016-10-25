const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const submissionRouter = require('../db/submissionRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', submissionRouter);

app.use(morgan('dev'));

module.exports = app;
