const mongoose = require("mongoose");

const researcherSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: String, required: true },
    researcher: { type: String, required: true },
    department: { type: String, required: true },
    abstract: { type: String, required: true },
    image: { type: String, required: true }, 
    date: { type: String, required: true },
    fullDescription: { type: String, required: true },
  },
  { timestamps: true } 
);

const Project = mongoose.model("project", researcherSchema); 
module.exports = Project;

