const express = require("express");
const apiControllers = require("../controllers/apiControllers");

// Making Router
const router = express.Router();

// Product Routes

// To create Product in Database
router.route("/product/create").post(apiControllers.createProduct);

// To read all Products from Database
router.route("/product/readall").get(apiControllers.readAllProduct);

// To read Particuler product by id
router.route("/product/read/:id").get(apiControllers.readOneProduct);

// To delete particuler product by id
router.route("/product/delete/:id").delete(apiControllers.deleteOneProduct);

// To update particuler product by id
router.route("/product/update/:id").patch(apiControllers.updateOneProduct);

// Category Routes

// To Create new Category
router.route("/category/create").post(apiControllers.createCategory);

// Exporting Router
module.exports = router;
