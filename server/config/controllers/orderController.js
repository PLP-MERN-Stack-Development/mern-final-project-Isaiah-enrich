const Order = require('../models/orderModel');

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrder = async (req, res) => {
  const { user, products, totalPrice } = req.body;

  if (!products || products.length === 0) {
    res.status(400);
    throw new Error('No products in order');
  }

  const order = new Order({ user, products, totalPrice });
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// @desc Get orders for a user
// @route GET /api/orders/user/:userId
// @access Private
const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.params.userId }).populate('products.product', 'name price');
  res.json(orders);
};

module.exports = { addOrder, getUserOrders };
