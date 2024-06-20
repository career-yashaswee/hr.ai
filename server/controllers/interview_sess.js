const Interview = require('../models/interview_slide'); // Adjusted to interview_slide.js


const startInterview = async (req, res) => {
    try {
        const { interviewer, candidate, questionPanel } = req.body;

        const newInterview = new Interview({
            interviewer,
            candidate,
            startTime: Date.now(),
            questionPanel: questionPanel.map(q => ({ questionText: q })),
            aiQuestionSpeaker: questionPanel.map(q => ({ questionText: q, mode: 'voice' }))
        });

        await newInterview.save();
        res.status(201).json({ message: 'Interview started successfully', interview: newInterview });
    } catch (error) {
        res.status(500).json({ error: 'Failed to start the interview', details: error.message });
    }
};

const endInterview = async (req, res) => {
    try {
        const { id } = req.params;
        const interview = await Interview.findById(id);

        if (!interview) {
            return res.status(404).json({ error: 'Interview not found' });
        }

        interview.endTime = Date.now();
        await interview.save();

        res.status(200).json({ message: 'Interview ended successfully', interview });
    } catch (error) {
        res.status(500).json({ error: 'Failed to end the interview', details: error.message });
    }
};

const getInterview = async (req, res) => {
    try {
        const { id } = req.params;
        const interview = await Interview.findById(id).populate('interviewer candidate');

        if (!interview) {
            return res.status(404).json({ error: 'Interview not found' });
        }

        res.status(200).json({ message: 'Interview retrieved successfully', interview });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the interview', details: error.message });
    }
};

const addResponse = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, responseType, response } = req.body;

        const interview = await Interview.findById(id);

        if (!interview) {
            return res.status(404).json({ error: 'Interview not found' });
        }

        interview.responses.push({ question, responseType, response });
        await interview.save();

        res.status(201).json({ message: 'Response added successfully', interview });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add the response', details: error.message });
    }
};

const pauseInterview = async (req, res) => {
    try {
        const { id } = req.params;
        const interview = await Interview.findById(id);

        if (!interview) {
            return res.status(404).json({ error: 'Interview not found' });
        }

        if (interview.isPaused) {
            return res.status(400).json({ error: 'Interview is already paused' });
        }

        interview.isPaused = true;
        interview.pauseTimes.push({ pauseStart: Date.now() });
        await interview.save();

        res.status(200).json({ message: 'Interview paused successfully', interview });
    } catch (error) {
        res.status(500).json({ error: 'Failed to pause the interview', details: error.message });
    }
};

const resumeInterview = async (req, res) => {
    try {
        const { id } = req.params;
        const interview = await Interview.findById(id);

        if (!interview) {
            return res.status(404).json({ error: 'Interview not found' });
        }

        if (!interview.isPaused) {
            return res.status(400).json({ error: 'Interview is not paused' });
        }

        interview.isPaused = false;
        const lastPause = interview.pauseTimes[interview.pauseTimes.length - 1];
        lastPause.pauseEnd = Date.now();
        await interview.save();

        res.status(200).json({ message: 'Interview resumed successfully', interview });
    } catch (error) {
        res.status(500).json({ error: 'Failed to resume the interview', details: error.message });
    }
};

module.exports = {
    startInterview,
    endInterview,
    getInterview,
    addResponse,
    pauseInterview,
    resumeInterview
};


