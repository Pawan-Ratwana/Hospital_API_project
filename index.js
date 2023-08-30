const express = require('express');
const port = 5500;
const db = require('./config/mongoose'); // Import and establish MongoDB connection

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy'); // Configure Passport JWT strategy

const app = express(); // Create an instance of the Express application

app.use(express.json()); // Enable JSON parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded form data parsing

// Include your routes using the '/api' base path
app.use('/', require('./routes'));
 
// Start the server
app.listen(port, function (err) {
    if (err) {
        console.log('Error starting the server:', err);
        return;
    }
    
    console.log(`Server is running on port ${port}`);
});
