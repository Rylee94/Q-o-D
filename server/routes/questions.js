const express = require("express");

//controller functions
const {
  createQuestion,
  getQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
  getRecentQuestion,
} = require("../controllers/questionController");

const router = express.Router();

//GET all questions
router.get("/", getQuestions);

//GET single question
router.get("/recent", getRecentQuestion);

// //GET current question
// router.get("/current", getCurrentQuestion);

//POST a new question
router.post("/", createQuestion);

//DELETE a question
router.delete("/:id", deleteQuestion);

//UPDATE a question
router.patch("/:id", updateQuestion);

module.exports = router;
