const mongoose = require('mongoose');

const connectDB = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB Connected');
      return;
    } catch (err) {
      console.error(`DB Connection Error (Attempt ${i + 1}/${retries}):`, err.message);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay / 1000}s...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        console.error('======================================================================');
        console.error('CRITICAL ERROR: Could not connect to MongoDB after maximum retries.');
        console.error('======================================================================');
        throw new Error('Database connection failed after maximum retries');
      }
    }
  }
};

module.exports = connectDB;
