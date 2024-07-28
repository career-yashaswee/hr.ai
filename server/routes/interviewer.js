const express = require('express');
const router = express.Router();
const { getInterviewer, addInterviewer, deleteInterviewer } = require('../controllers/interviewer');

<<<<<<< HEAD
// Route to get interviewer by ID
router.get('/interviewerbyID/', getInterviewer);
router.post('/:addinterviewerbyID', addInterviewer);
router.delete('/:deleteinterviewerbyID', deleteInterviewer);

=======
router.get('/interviewerbyID/', getInterviewer);
router.post('/:addinterviewerbyID', addInterviewer);
router.delete('/:deleteinterviewerbyID', deleteInterviewer);
>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
module.exports = router;
