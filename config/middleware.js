const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient'); // Import Patient model

exports.verifyToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      const token = authorizationHeader.split(' ')[1]; // Extract the token
      const decoded = jwt.verify(token, 'secretkeyforapihospital'); // Verify and decode the token
      
      // Access the decoded information
      const userId = decoded.id;
      const userRole = decoded.role;

      // Attach user information to the request object
      if (userRole === 'doctor') {
        req.doctor = await Doctor.findById(userId);
      } else if (userRole === 'patient') {
        req.patient = await Patient.findById(userId);
      }

      next(); // Proceed to the next middleware or route handler
    } else {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized access: No token provided'
      });
    }
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access: Invalid token'
    });
  }
};
