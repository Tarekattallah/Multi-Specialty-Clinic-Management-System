const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.controller');

const router = express.Router();

// Register new user (patient or doctor)
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

module.exports = router;