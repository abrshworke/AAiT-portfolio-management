

const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
module.exports = News;
