const express = require("express");
const router = express.Router();
const Gallary = require("../model/gallary");

router.get("/", async (req, res) => {
  try {
    const gallarys = await Gallary.find({});
    res.status(200).json(gallarys);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const images = await Gallary.findById(id);
    if (!images) return res.status(404).json({ message: "images not found" });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error: error.message });
  }
});

// Add new achievement
router.post("/", async (req, res) => {
  const { title, category, description, url   } = req.body;
  if (!title || !category || !description || !url ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newGallary = await Gallary.create({ title, category, description, url });
    res.status(201).json({ message: "gallary added successfully", images: newGallary });
  } catch (error) {
    res.status(500).json({ message: "Error adding news", error: error.message });
  }
});

// Delete achievement
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedgallary = await Gallary.findByIdAndDelete(id);
    if (!deletedgallary) return res.status(404).json({ message: "image not found" });
    res.status(200).json({ message: "image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error: error.message });
  }
});

module.exports = router;
