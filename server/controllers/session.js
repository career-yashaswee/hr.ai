const askQuestion = require("../api/ai/interview/ask");
const genFeedback = require("../api/ai/interview/feedback");
const genComprehension = require("../api/ai/interview/comprehend");
/**
 * @desc Issue the next interview question for a specific interview session
 * @param {string} interviewSessionId - The ID of the interview session
 * @param {object} jobScenario - Object containing job title and description
 * @param {object} userResume - Object containing candidate's resume details
 * @param {string} stage - Current stage of the interview
 * @returns {object} JSON response indicating success or failure
 */

const issueNextQuestion = async (req, res, next) => {
	try {
		const text = await askQuestion(req, res);
		res.status(201).json(text);
	} catch (error) {
		console.error("Error issuing next question:", error);
		return { error: "Failed to issue next question" };
	}
};

const issueFeedback = async (req, res, next) => {
	try {
		// Extract question and answer from the request body
		// const { question, answer } = req.body;
		// Generate feedback using the generateFeedback function
		const feedback = await genFeedback(req, res);
		// Return the feedback
		res.status(200).json(feedback);
	} catch (error) {
		console.error("Error issuing feedback:", error);
		res.status(500).json({ error: "Failed to issue feedback" });
	}
};

const issueComprehension = async (req, res, next) => {
	try {
		// Extract chatHistory and tokenLimiter from the request body
		const { chatHistory, tokenLimit } = req.body;

		if (!Array.isArray(chatHistory) || chatHistory.length === 0) {
			return res
				.status(400)
				.json({ error: "chatHistory must be a non-empty array" });
		}

		if (!tokenLimit || typeof tokenLimit !== "number") {
			return res.status(400).json({ error: "tokenLimiter must be a number" });
		}

		// Generate comprehension using the generateComprehension function
		const summary = await genComprehension(req, res);

		// Return the summary
		res.status(200).json({ summary });
	} catch (error) {
		console.error("Error comprehending chat history:", error);
		res.status(500).json({ error: "Failed to comprehend chat history" });
	}
};

module.exports = {
	issueNextQuestion,
	issueFeedback,
	issueComprehension,
};
