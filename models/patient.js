const mongoose = require('mongoose');

// Define the Patient schema
const patientSchema = new mongoose.Schema({
  phone: {
    type: Number,
    maxlength: 10,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create the Patient model using the schema
const Patient = mongoose.model('Patient', patientSchema);

// Export the Patient model
module.exports = Patient;
