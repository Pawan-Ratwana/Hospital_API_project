const mongoose = require('mongoose');

// Define the Report schema
const reportSchema = new mongoose.Schema({
  // Reference to the Doctor model using ObjectId
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor' // Referencing the 'Doctor' model
  },

  // Reference to the Patient model using ObjectId
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient' // Referencing the 'Patient' model
  },

  // Define the status field with allowed values
  status: {
    type: String,
    required: true,
    enum: ['Negative', 'Positive', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
  },

  // Define the date field with a default value of the current date and time
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create the Report model using the schema
const Report = mongoose.model('Report', reportSchema);

// Export the Report model
module.exports = Report;
