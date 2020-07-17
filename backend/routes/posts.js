const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/question", (req, res) => {
  const post = new Post({
    question: req.body.question,
    choices: req.body.choices,
    answer: req.body.answer
  });

  post
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
