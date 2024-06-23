const { GoogleGenerativeAI } = require("@google/generative-ai");
const InterviewSession = require("../../../models/InterviewSession");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Ask function to generate the next interview question.
 *
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 *
 * @returns {void} Sends a response with the next interview question or an error message.
 */
async function ask(req, res) {
	try {
		// Extracting the job scenario and interview session ID from the request body
		const { jobScenario } = req.body;

		// if (!jobScenario || !interviewSessionId || !userResume || !stage) {
		// 	return res
		// 		.status(400)
		// 		.json({ error: "Missing required fields in the request body" });
		// }

		// // Fetching the interview session from the database
		// const interviewSession = await InterviewSession.findById(
		// 	interviewSessionId
		// );
		// if (!interviewSession) {
		// 	return res.status(404).json({ error: "Interview session not found" });
		// }

		const { jobTitle, jobDescription } = jobScenario;
		// const { experienceTechnologies } = userResume;

		// if (!jobTitle || !jobDescription || !experienceTechnologies) {
		// 	return res
		// 		.status(400)
		// 		.json({ error: "Incomplete job scenario or user resume details" });
		// }

		// Initializing the Google Generative AI model
		//TODO: Wrap this Generative AI Model into another Library File Gemini.js
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

		// Starting the chat with the model, including previous chat history
		const chat = model.startChat({
			// history: interviewSession.chatHistory,
			generationConfig: {
				maxOutputTokens: 100,
			},
		});

		// Crafting the message to generate the next question
		const prompt = `Act like a Veteran Interviewer and ask a question with following details:
    - Job Title: ${jobTitle}
    - Job Description: ${jobDescription}
    `;

		// - Stage: ${stage}
		// - Candidate's Experience with Technologies: ${experienceTechnologies}
		// - Previous Chat History: ${JSON.stringify(interviewSession.chatHistory)}

		// Sending the message to the model and getting the response
		const result = await chat.sendMessage(prompt);
		const response = await result.response;
		const text = response.text();

		// Updating the interview session chat history with the generated question
		// interviewSession.chatHistory.push({
		// 	role: "model",
		// 	parts: [{ text }],
		// });
		// await interviewSession.save();

		// Sending the generated question as the response
		res.status(200).json({ question: text });
	} catch (error) {
		console.error("Error asking question:", error);
		res.status(500).json({ error: "Failed to ask question" });
	}
}

module.exports = ask;
