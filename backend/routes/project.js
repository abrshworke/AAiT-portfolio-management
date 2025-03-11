

const express = require("express");
const router = express.Router();
const Project = require("../model/project");


router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching researcher", error: error.message });
  }
});

// Get a single achievement by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const researcher = await Project.findById(id);
    if (!researcher) return res.status(404).json({ message: "project not found" });
    res.status(200).json(researcher);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error: error.message });
  }
});

// Add new achievement
router.post("/", async (req, res) => {
  const { title, status, researcher, department, abstract , image, date , fullDescription } = req.body;
  if (!title || !status || !researcher ||  !department ||  !abstract || !image || !date || !fullDescription) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newresearcher = await Project.create({ title, status,  researcher,  department,  abstract, image, date , fullDescription });
    res.status(201).json({ message: "project added successfully", researcher: newresearcher });
  } catch (error) {
    res.status(500).json({ message: "Error adding achievement", error: error.message });
  }
});


// Delete achievement
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedresearcher = await Project.findByIdAndDelete(id); // ✅ Corrected
    if (!deletedresearcher) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message });
  }
});




module.exports = router;
