const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

// Secure credentials check
const adminUser = process.env.ADMIN_USER;
const adminPass = process.env.ADMIN_PASS;

if (!adminUser || !adminPass || adminUser.toLowerCase() === 'admin' || adminPass === 'admin123') {
  console.error('\n======================================================================');
  console.error('CRITICAL SECURITY CONFIGURATION ERROR:');
  console.error('ADMIN_USER and ADMIN_PASS environment variables must be configured');
  console.error('with secure values in backend/.env!');
  console.error('Default values ("admin" / "admin123") are NOT permitted.');
  console.error('======================================================================\n');
  if (process.env.NODE_ENV === 'production') {
    console.error('Process terminated due to insecure production credentials.');
    process.exit(1);
  }
}

// Connect to MongoDB with error handling
connectDB().catch(err => {
  console.error('Failed to connect to MongoDB:', err.message);
  process.exit(1);
});

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:5500', 'http://127.0.0.1:5500'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: { message: 'Too many requests, please try again later.' } });
const adminLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: { message: 'Too many admin requests, please try again later.' } });

// Routes
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/admin', adminLimiter, adminRoutes);
app.use('/api/auth', adminLimiter, authRoutes);
app.use('/api/chat', chatRoutes);

// Health check
app.get('/', (req, res) => res.json({ message: 'CSV Shivani API running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
