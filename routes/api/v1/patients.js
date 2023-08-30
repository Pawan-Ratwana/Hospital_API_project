const express= require('express');

const router = express.Router();
const patientController = require('../../../controllers/api/v1/patient_controller');
const reportController =require('../../../controllers/api/v1/report_controller');
const {verifyToken} = require('../../../config/middleware');
const passport = require('passport');

// Apply verifyToken middleware to all routes in this router
// router.use(verifyToken);

 router.post('/register', patientController.register);

 
 //- /patients/:id/create_report
 router.post('/create_report',reportController.create_report);
 


module.exports = router;