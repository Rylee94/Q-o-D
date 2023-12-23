const Question = require("../models/questionModel");
const mongoose = require("mongoose");


const getCurrentQuestion = async (req, res) => {
  try {
    const question = await Question.findOne({}).sort({ createdAt: -1 });
    if (!question) {
      return res.status(404).json({ error: "No questions found" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get all questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}).sort({ createdAt: -1 });
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//get a single workout
const getRecentQuestion = async (req, res) => {
  try {
    const question = await Question.findOne({}).sort({ createdAt: -1 });

    if (!question) {
      return res.status(404).json({ error: "No questions found" });
    }

    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//create a new questsion
const createQuestion = async (req, res) => {
  const { title, body } = req.body;

  // add document to db
  try {
    const question = await Question.create({ title, body });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a question
const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Question not found - invalid id" });
  }

  const question = await Question.findOneAndDelete({ _id: id });
  if (!question) {
    return res.status(400).json({ error: "Question not found - invalid id" });
  }
  res.status(200).json(question);
};

//update a question
const updateQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Question not found - invalid id" });
  }
  const question = await Question.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!question) {
    return res.status(400).json({ error: "Question not found - invalid id" });
  }
  res.status(200).json(question);
};

module.exports = {
  createQuestion,
  getRecentQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
  getCurrentQuestion
};
