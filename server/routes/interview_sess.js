const express = require('express');
const router = express.Router();
const {
    startInterview,
    endInterview,
    getInterview,
    addResponse,
    pauseInterview,
    resumeInterview
} = require('../controllers/interview_sess');


router.post('/start', startInterview);
router.put('/end/:id', endInterview);
router.get('/:id', getInterview);
router.post('/:id/response', addResponse);
router.put('/:id/pause', pauseInterview);
router.put('/:id/resume', resumeInterview);

module.exports = router;
