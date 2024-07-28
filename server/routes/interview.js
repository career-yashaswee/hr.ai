const express = require("express");
const { validate } = require("../middlewares/validateSchema");
const {
	createNewSession,
<<<<<<< HEAD
    listInterviewSession,
    fetchInterview,
    listInterviewsByUser,
    countInterviewsByUserID,
=======
	listInterviewSession,
	fetchInterview,
    	listInterviewsByUser,
    	countInterviewsByUserID,
	
>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
} = require("../controllers/interview");
const router = express.Router();

const {
	newInterviewSessionSchema,
	listInterviewSessionSchema,
} = require("../schemas/interviewSessionSchema");
//TODO: Add Zod Validation to all of these Requests

router.post("/", createNewSession);
router.get("/", validate(listInterviewSessionSchema), listInterviewSession);
router.get('/sessions/:interviewID', fetchInterview);
router.get('/users/:userID/interviews', listInterviewsByUser);
router.get('/users/:userID/interviews/count', countInterviewsByUserID);


router.get("/report");
module.exports = router;
