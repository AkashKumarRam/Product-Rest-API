// Importing Models
const Product = require("../modals/productModel");
const Category = require("../modals/categoryModel");

// Function To Create New Product
exports.createProduct = async (req, res) => {
  try {
    const body = req.body;

    const newProduct = await Product.create(body);

    res.status(201).json({
      status: "ok",
      data: newProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: `${err}`,
    });
  }
};

// Function To Create New Category
exports.createCategory = async (req, res) => {
  try {
    const body = req.body;

    const newCategory = await Category.create(body);

    res.status(201).json({
      status: "ok",
      data: newCategory,
    });
  } catch (err) {
    res.status(400).json({
      message: `${err}`,
    });
  }
};

// Function To fetch all products
exports.readAllProduct = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "categoryId",
          as: "category",
        },
      },
      {
        $addFields: {
          categoryName: { $arrayElemAt: ["$category.categoryName", 0] },
        },
      },
      {
        $project: {
          category: 0,
        },
      },
    ]);

    res.status(200).json({
      status: "ok",
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      message: `${err}`,
    });
  }
};

// Function To Read One Product by id
exports.readOneProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.find({ productId: id });

    res.status(200).json({
      status: "OK",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

// Function To Delete One Product by Id
exports.deleteOneProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.deleteOne({ productId: id });

    res.status(202).json({
      message: "Product has been deleted",
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

// Function To Update One Product by Id
exports.updateOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dataToUpdate = req.body;

    const product = await Product.findOneAndUpdate(
      { productId: id },
      dataToUpdate
    );

    res.status(200).json({
      status: "Ok",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
