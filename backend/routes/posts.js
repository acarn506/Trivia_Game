const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get back all the questions from database
router.get("/questions", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//get back specific question
router.get("/questions/:category", async (req, res) => {
  try {
    const post = await Post.find({ category: req.params.category });
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post for saving Questions
router.post("/question", async (req, res) => {
  const post = new Post({
    category: req.body.category,
    question: req.body.question,
    choices: req.body.choices,
    answer: req.body.answer,
    key: req.body.key
  });
  try {
    const questionPost = await post.save();
    res.json(questionPost);
  } catch (err) {
    res.json({ message: err });
  }
});
//delete question
router.delete("/question/:key", async (req, res) => {
  try {
    const questionRemove = await Post.deleteOne({ key: req.params.key });
    res.json(questionRemove);
  } catch (err) {
    res.json({ message: err });
  }
});

//update question

module.exports = router;
