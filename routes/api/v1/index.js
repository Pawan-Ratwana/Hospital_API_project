// Import the express module
const express = require('express');

// Create a router instance
const router = express.Router();

// Use the 'doctors' route handlers from the 'doctors' module
router.use('/doctors', require('./doctors'));

// Use the 'patients' route handlers from the 'patients' module
router.use('/patients', require('./patients'));

// Use the 'reports' route handlers from the 'reports' module
router.use('/reports', require('./reports'));

// Export the router to be used in other parts of the application
module.exports = router;
