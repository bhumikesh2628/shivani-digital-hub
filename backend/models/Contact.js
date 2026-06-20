const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true, maxlength: 100 },
  email:   { type: String, default: '', trim: true },
  phone:   { type: String, required: true, trim: true },
  state:   { type: String, default: '', trim: true },
  service: { type: String, default: 'Not specified', trim: true, maxlength: 100 },
  message: { type: String, default: '', trim: true, maxlength: 1000 },
  status:  { type: String, enum: ['new', 'read', 'resolved'], default: 'new' },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
