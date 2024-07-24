
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewerSchema = new Schema({
  interviewerID: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  exHistory: {
    type: String,
    required: true
  },
  personality: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  experienceYears: {
    type: Number,
    required: true
  }
});

const Interviewer = mongoose.model('Interviewer', interviewerSchema);
module.exports = Interviewer;
