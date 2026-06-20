const jwt = require('jsonwebtoken');

// POST /api/admin/login
const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const correctUser = process.env.ADMIN_USER;
    const correctPass = process.env.ADMIN_PASS;

    if (username === correctUser && password === correctPass) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1d' });
      return res.json({ message: 'Login successful!', token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { adminLogin };
