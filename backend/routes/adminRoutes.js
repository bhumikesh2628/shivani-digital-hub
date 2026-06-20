const express = require('express');
const { getDashboard, updateContactStatus, deleteContact } = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// All admin routes are protected by JWT Bearer token (Authorization header)
// Bearer token in headers is not vulnerable to CSRF (cookies not used)
router.get('/dashboard', protect, getDashboard);
router.put('/contact/:id', protect, updateContactStatus);
router.delete('/contact/:id', protect, deleteContact);

module.exports = router;
