const express = require('express');
const { body, validationResult } = require('express-validator');
const { submitContact, getAllContacts } = require('../controllers/contactController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('phone').trim().notEmpty().withMessage('Phone is required').isMobilePhone().withMessage('Invalid phone number'),
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email').normalizeEmail(),
  body('service').optional().trim().isLength({ max: 100 }),
  body('state').optional().trim().isLength({ max: 100 }),
  body('message').optional().trim().isLength({ max: 1000 }),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post('/', contactValidation, validate, submitContact);
router.get('/', protect, getAllContacts);

module.exports = router;
