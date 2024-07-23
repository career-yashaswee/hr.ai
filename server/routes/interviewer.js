const express = require('express');
const router = express.Router();
const { getInterviewer } = require('../controllers/interviewer');

router.get('/interviewerbyID/', getInterviewer);
module.exports = router;
