const express = require('express');
const SubmissionController = require('./submissionController');

const router = express.Router();

router.post('/signup', SubmissionController.create);

module.exports = router;
