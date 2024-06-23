const mongoose = require("mongoose");

// Define the Mongoose schema
const interviewSessionSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: [true, "User ID is required"],
			ref: "User",
		},
		jobScenarioId: {
			type: mongoose.Schema.Types.ObjectId,
			required: [true, "Job Scenario ID is required"],
			ref: "JobScenario",
		},
		interviewerId: {
			type: mongoose.Schema.Types.ObjectId,
			required: [true, "Interviewer ID is required"],
			ref: "User",
		},
		chatHistory: {
			required: [false],
			type: Array,
		},
		status: {
			type: String,
			enum: ["pending", "ongoing", "completed"],
			default: "pending",
		},
	},
	{
		timestamps: true,
	}
);

// Create the model
const InterviewSession = mongoose.model(
	"InterviewSession",
	interviewSessionSchema
);

module.exports = InterviewSession;
