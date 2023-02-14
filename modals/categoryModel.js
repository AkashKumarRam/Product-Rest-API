// Importing Mongoose
const mongoose = require("mongoose");

// Creating Category Schema
const categorySchema = new mongoose.Schema({
  categoryId: {
    type: Number,
    required: true,
    unique: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

// Creating Category Model
const Category = mongoose.model("Category", categorySchema);

// Exporting Category Model
module.exports = Category;
