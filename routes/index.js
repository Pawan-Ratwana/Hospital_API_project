// Import the express module
const express = require('express');

// Create a router instance
const router = express.Router();

// Use the 'api' route handlers from the 'api' module
router.use('/api', require('./api'));

// Export the router to be used in other parts of the application
module.exports = router;