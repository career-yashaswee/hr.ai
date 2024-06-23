const JobScenario = require("../models/JobScenario");

// Function to create a new JobScenario
const createJobScenario = async (req, res, next) => {
	try {
		const { user, jobTitle, jobDescription, experience, company } = req.body;

		// Create a new JobScenario instance
		const jobScenario = new JobScenario({
			user,
			jobTitle,
			jobDescription,
			experience,
			company,
		});

		// Save the JobScenario to the database
		await jobScenario.save();

		// Respond with the created JobScenario
		res.status(201).json(jobScenario);
	} catch (error) {
		console.log(error);
		next(error);
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	createJobScenario,
};
