// Import the express module
const express = require('express');

// Create a router instance
const router = express.Router();

// Import the Report model
const Report = require('../../../models/report');

// Import the report controller
const reportController = require('../../../controllers/api/v1/report_controller');

// Import the passport module for authentication (if used)
const passport = require('passport');

// Handle the GET request to fetch all reports
router.get('/all_reports', reportController.all_reports);

// Handle the GET request to fetch reports by status
router.get('/status', reportController.report_by_status);

// Export the router to be used in other parts of the application
module.exports = router;
