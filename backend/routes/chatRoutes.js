const express = require('express');
const { handleChat } = require('../controllers/chatController');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiter specifically for chat requests to prevent abuse
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 chat requests per window
  message: { error: 'Too many messages from this IP, please try again after 15 minutes.' }
});

router.post('/', chatLimiter, handleChat);

module.exports = router;
