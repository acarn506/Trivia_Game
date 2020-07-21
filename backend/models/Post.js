const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  choices: {
    type: [],
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  key: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("question", QuestionSchema);
