const Feedback = require("../models/feedback");

// POST
const createFeedback = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    const feedback = await Feedback.create({
      name,
      rating,
      comment,
    });

    res.status(201).json({
      success: true,
      message: "Feedback Added",
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();

    res.status(200).json({
      success: true,
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFeedback,
  getAllFeedback,
};