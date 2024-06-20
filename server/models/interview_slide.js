const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    interviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    candidate: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date
    },
    isPaused: {
        type: Boolean,
        default: false
    },
    pauseTimes: [{
        pauseStart: {
            type: Date
        },
        pauseEnd: {
            type: Date
        }
    }],
    responses: [{
        question: {
            type: String,
            required: true
        },
        responseType: {
            type: String,
            enum: ['voice', 'text'],
            required: true
        },
        response: {
            type: String,
            required: true
        }
    }],
    questionPanel: [{
        questionText: {
            type: String,
            required: true
        }
    }],
    aiQuestionSpeaker: [{
        questionText: {
            type: String,
            required: true
        },
        mode: {
            type: String,
            enum: ['voice'],
            default: 'voice'
        }
    }],
    feedback: {
        type: String
    }
}, { timestamps: true });

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;





n