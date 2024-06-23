const express = require("express");
const { validate } = require("../middlewares/validateSchema");
const { createNewSession } = require("../controllers/interview");
const {
	issueNextQuestion,
	issueFeedback,
	issueComprehension,
} = require("../controllers/session");
const router = express.Router();

//TODO: Integrate Authentication for these routes and next them to api routes

const {
	newInterviewSessionSchema,
} = require("../schemas/interviewSessionSchema");
//TODO: Add Zod Validation to all of these Requests

router.post("/create", createNewSession);
router.get("/nextQuestion", issueNextQuestion);
router.get("/responseFeedback", issueFeedback);
router.get("/comprehend", issueComprehension);

module.exports = router;
