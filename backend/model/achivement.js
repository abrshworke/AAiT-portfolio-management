

const mongoose = require("mongoose");

const achievementSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true }, // Changed from 'data' to 'date'
  },
  { timestamps: true }
);

const Achievement = mongoose.model("Achievement", achievementSchema);
module.exports = Achievement;
