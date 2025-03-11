const express = require("express");
const router = express.Router();
const News = require("../model/news");

router.get("/", async (req, res) => {
  try {
    const events = await News.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) return res.status(404).json({ message: "news not found" });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error: error.message });
  }
});

// Add new achievement
router.post("/", async (req, res) => {
  const { title, category, description, image, date , fullDescription  } = req.body;
  if (!title || !category || !description || !image || !date || !fullDescription ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newEvent = await News.create({ title, category, description, image, date , fullDescription });
    res.status(201).json({ message: "Achievement added successfully", news: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error adding news", error: error.message });
  }
});

// Delete achievement
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await News.findByIdAndDelete(id);
    if (!deletedEvent) return res.status(404).json({ message: "news not found" });
    res.status(200).json({ message: "news deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting news", error: error.message });
  }
});

module.exports = router;
