const express = require('express');
const router = express.Router();
const { addOrder, getUserOrders } = require('../controllers/orderController');

router.post('/', addOrder);
router.get('/user/:userId', getUserOrders);

module.exports = router;
