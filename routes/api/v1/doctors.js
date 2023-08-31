// Import the express module
const express = require('express');

// Create a router instance
const router = express.Router();

// Import the doctor controller module
const doctorController = require('../../../controllers/api/v1/doctor_controller');

// Handle the POST request to register a doctor
router.post('/register', doctorController.register);

// Handle the POST request for doctor login
router.post('/login', doctorController.login);

// Export the router to be used in other parts of the application
module.exports = router;
