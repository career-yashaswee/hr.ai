const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateComprehension(req, res) {
	try {
		const { chatHistory, tokenLimit } = req.body;
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

		const chat = model.startChat({
			history: chatHistory.map((message) => ({
				role: message.role,
				parts: [{ text: message.text }],
			})),
			generationConfig: {
				maxOutputTokens: tokenLimit,
			},
		});

		const message = "Please summarize the conversation so far.";

		const result = await chat.sendMessage(message);
		const response = await result.response;
		const summary = response.text();

		return summary;
	} catch (error) {
		console.error("Error generating comprehension:", error);
		throw new Error("Failed to generate comprehension");
	}
}

module.exports = generateComprehension;
