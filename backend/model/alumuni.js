

const mongoose = require("mongoose");

const AlumniSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    graduation: { type: String, required: true },
    currentRole: { type: String, required: true },
    department: { type: String, required: true },
    image: { type: String, required: true },
    testimonial: { type: String, required: true }, 
  },
  { timestamps: true }
);

const Alumni = mongoose.model("Alumni", AlumniSchema);
module.exports = Alumni;
