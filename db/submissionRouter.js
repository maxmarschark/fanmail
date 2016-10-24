const express = require('express');
const SubmissionController = require ('./submissionController.js');

const router = express.Router();

router.post('/', SubmissionController);

module.exports = router;
