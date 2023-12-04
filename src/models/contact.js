const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  project_type: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('contacts', contactSchema);