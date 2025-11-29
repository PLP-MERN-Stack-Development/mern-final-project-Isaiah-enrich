const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

// Register new user
router.post('/register', registerUser);

// Login
router.post('/login', authUser);

module.exports = router;
