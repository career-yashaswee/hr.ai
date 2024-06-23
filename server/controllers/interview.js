const InterviewSession = require("../models/InterviewSession");

/**
 * Controller function to create a new InterviewSession.
 *
 * @param {Object} req - Express request object containing userId, jobScenarioId, chatHistory, status, and interviewerId in the body.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response with the created InterviewSession or error message.
 */
const createNewSession = async (req, res) => {
	try {
		const { userId, jobScenarioId, chatHistory, status, interviewerId } =
			req.body;

		// Create a new InterviewSession instance
		const interviewSession = new InterviewSession({
			userId,
			jobScenarioId,
			chatHistory,
			status,
			interviewerId,
		});

		// Save the InterviewSession to the database
		await interviewSession.save();

		// Respond with the created InterviewSession
		res.status(201).json(interviewSession);
	} catch (error) {
		// Handle validation errors or other exceptions
		console.error("Error creating InterviewSession:", error);
		let errorMessage = "Failed to create InterviewSession.";
		if (error.errors) {
			errorMessage = Object.values(error.errors)
				.map((err) => err.message)
				.join(", ");
		} else if (error.message) {
			errorMessage = error.message;
		}
		res.status(400).json({ error: errorMessage });
	}
};

module.exports = {
	createNewSession,
};
