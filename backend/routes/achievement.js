

const express = require("express");
const router = express.Router();
const Achievement = require("../model/achivement");

// Get all achievements
router.get("/", async (req, res) => {
  try {
    const achievements = await Achievement.find({});
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching achievements", error: error.message });
  }
});

// Get a single achievement by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const achievement = await Achievement.findById(id);
    if (!achievement) return res.status(404).json({ message: "Achievement not found" });
    res.status(200).json(achievement);
  } catch (error) {
    res.status(500).json({ message: "Error fetching achievement", error: error.message });
  }
});

// Add new achievement
router.post("/", async (req, res) => {
  const { title, category, description, image, date , fullDescription } = req.body;
  if (!title || !category || !description || !image || !date || !fullDescription) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newAchievement = await Achievement.create({ title, category, description, image, date , fullDescription });
    res.status(201).json({ message: "Achievement added successfully", achievement: newAchievement });
  } catch (error) {
    res.status(500).json({ message: "Error adding achievement", error: error.message });
  }
});

// Delete achievement
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAchievement = await Achievement.findByIdAndDelete(id);
    if (!deletedAchievement) return res.status(404).json({ message: "Achievement not found" });
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement", error: error.message });
  }
});

module.exports = router;
