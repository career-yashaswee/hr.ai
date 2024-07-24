const express = require('express');
const router = express.Router();
const { getInterviewer, addInterviewer, deleteInterviewer } = require('../controllers/interviewer');

// Route to get interviewer by ID
router.get('/interviewerbyID/', getInterviewer);
router.post('/:addinterviewerbyID', addInterviewer);
router.delete('/:deleteinterviewerbyID', deleteInterviewer);

module.exports = router;
