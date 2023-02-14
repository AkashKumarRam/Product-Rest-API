// Importing Mongoose
const mongoose = require("mongoose");

// Creating Product Schema
const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  qtyPerUnit: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  unitInStock: {
    type: Number,
    required: true,
  },
  discontinued: {
    type: Boolean,
    required: true,
  },
  categoryId: { type: Number, required: true },
});

// Creating Product Model
const Product = mongoose.model("Product", productSchema);


// Exporting It
module.exports = Product;
