const express = require("express");
const router = express.Router();
const Alumni = require("../model/alumuni");

router.get("/", async (req, res) => {
  try {
    const alumnis = await Alumni.find({});
    res.status(200).json(alumnis);
  } catch (error) {
    res.status(500).json({ message: "Error fetching alumnis", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const alumnian = await Alumni.findById(id);
    if (!alumnian) return res.status(404).json({ message: "alumni not found" });
    res.status(200).json(alumnian);
  } catch (error) {
    res.status(500).json({ message: "Error fetching alumni", error: error.message });
  }
});



router.post("/", async (req, res) => {
  const { name, department, graduation , image, currentRole , testimonial  } = req.body;
  if (!name || !department || !graduation || !image || !currentRole || !testimonial ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newAlumni = await Alumni.create({ name, department, graduation, image, currentRole , testimonial });
    res.status(201).json({ message: "AAiT Alumni added successfully", alumnian: newAlumni });
  } catch (error) {
    res.status(500).json({ message: "Error adding AAiT Alumni", error: error.message });
  }
});



// Delete achievement
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAlumni = await Alumni.findByIdAndDelete(id);
    if (!deletedAlumni) return res.status(404).json({ message: "aait alumnis not found" });
    res.status(200).json({ message: "Alumni deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Alumni", error: error.message });
  }
});

module.exports = router;
