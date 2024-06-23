const { z } = require("zod");
const mongoose = require("mongoose");

// Define a custom validation function for ObjectId
const isValidObjectId = (val) => mongoose.Types.ObjectId.isValid(val);

// Define the Zod schema for validation
const newInterviewSessionSchema = z.object({
	body: {
		userId: z
			.string()
			.min(1, "User ID is required")
			.refine(isValidObjectId, "Invalid User ID"),

		jobScenarioId: z
			.string()
			.min(1, "Job Scenario ID is required")
			.refine(isValidObjectId, "Invalid Job Scenario ID"),

		chatHistory: z.array(),

		status: z.enum(["pending", "ongoing", "completed"], "Invalid status"),

		interviewerId: z
			.string()
			.min(1, "Interviewer ID is required")
			.refine(isValidObjectId, "Invalid Interviewer ID"),
	},
});

//TODO: Write Schema for NextQuestion API Call.

module.exports = { newInterviewSessionSchema };
