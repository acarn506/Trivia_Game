const mongoose = require("mongoose");

//choices [{name: string, buttonColor: string, key : number}]

const QuestionSchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  choices: [String],
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
