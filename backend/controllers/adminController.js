const Contact = require('../models/Contact');
const mongoose = require('mongoose');

// GET /api/admin/dashboard
const getDashboard = async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const newLeads = await Contact.countDocuments({ status: 'new' });
    const resolved = await Contact.countDocuments({ status: 'resolved' });
    const recent = await Contact.find().sort({ createdAt: -1 }).limit(5);
    res.json({ total, newLeads, resolved, recent });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// PUT /api/admin/contact/:id
const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid contact ID' });
    }

    // Validate status enum
    const validStatuses = ['new', 'read', 'resolved'];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Must be: new, read, or resolved' });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// DELETE /api/admin/contact/:id
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid contact ID' });
    }

    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { getDashboard, updateContactStatus, deleteContact };
