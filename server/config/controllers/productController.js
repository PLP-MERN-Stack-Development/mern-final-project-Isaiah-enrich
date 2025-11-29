const Product = require('../models/productModel');

// @desc Get all products
// @route GET /api/products
// @access Public
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc Get single product
// @route GET /api/products/:id
// @access Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

// @desc Create a product
// @route POST /api/products
// @access Admin
const createProduct = async (req, res) => {
  const { name, description, price, category, stock, images } = req.body;
  const product = new Product({ name, description, price, category, stock, images });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc Update a product
// @route PUT /api/products/:id
// @access Admin
const updateProduct = async (req, res) => {
  const { name, description, price, category, stock, images } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock || product.stock;
    product.images = images || product.images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Admin
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
