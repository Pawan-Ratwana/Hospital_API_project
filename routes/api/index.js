// Import the express module
const express = require('express');

// Create a router instance
const router = express.Router();

// Use the 'v1' route handlers from the 'v1' module
router.use('/v1', require('./v1'));

// Export the router to be used in other parts of the application
module.exports = router;
