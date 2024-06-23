const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	questionText: { type: String, required: true },
	questionCategory: { type: String, required: true },
	questionDifficulty: { type: String, required: true },
});

const answerSchema = new mongoose.Schema({
	speech: { type: String, required: true },
	text: { type: String, required: true },
	language: { type: String, required: true },
	wordFrequency: { type: Map, of: Number, required: true },
});

const feedbackSchema = new mongoose.Schema({
	question: { type: questionSchema, required: true },
	answer: { type: answerSchema, required: true },
	idealResponse: { type: String, required: true },
	feedbackText: { type: String, required: true },
	rating: { type: Number, required: true },
});

module.exports = { questionSchema, answerSchema, feedbackSchema };
