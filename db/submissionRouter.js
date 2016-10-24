const express = require('express');
const SubmissionController = require ('./submissionController.js');

const router = express.Router();

router.post('/', submissionController);

module.exports default;
