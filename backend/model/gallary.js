
const mongoose = require("mongoose");

const gallarySchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    
  }, 
  { timestamps: true }
);

const Gallary = mongoose.model("Gallary", gallarySchema); 
module.exports = Gallary;
