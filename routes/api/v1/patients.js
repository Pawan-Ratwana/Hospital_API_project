// Import the express module
const express = require('express');

// Create a router instance
const router = express.Router();

// Import the patient and report controllers
const patientController = require('../../../controllers/api/v1/patient_controller');
const reportController = require('../../../controllers/api/v1/report_controller');

// Import the passport module for authentication (if used)
const passport = require('passport');

// Handle the POST request to register a patient
router.post('/register', patientController.register);

// Handle the POST request to create a report
router.post('/create_report', reportController.create_report);

// Export the router to be used in other parts of the application
module.exports = router;
