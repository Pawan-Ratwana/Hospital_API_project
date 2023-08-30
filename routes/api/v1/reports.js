const express= require('express');

const router = express.Router();
const Report =require('../../../models/report')
const reportController = require('../../../controllers/api/v1/report_controller');

const passport = require('passport');

router.get('/all_reports',  reportController.all_reports);

router.get('/status',  reportController.report_by_status);

module.exports = router;




