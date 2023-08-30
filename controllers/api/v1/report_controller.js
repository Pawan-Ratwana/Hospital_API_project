const Report = require('../../../models/report');

module.exports.create_report = async function (req, res) {
  try {
    const doctorId = req.userId;
    const patientId = req.params.id;
    // const { status } = req.body;
    const status = req.body.status;

    const report = await Report.create({
      // doctor: doctorId,
      patient: patientId,
      status: status
    });

    return res.status(200).json({
      success: true,
      body: report,
      message: 'Report Created Successfully!'
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Error Occurred!'
    });
  }
};


//find patient with id and send report
module.exports.all_reports= async function(req,res){
   try{
    const reports = Report.find({ "patient": req.params.id });
    reports.exec(function (err, report) {
      return res.send(report);
  })
   }
   catch (err) {
    // Error handling
    return res.status(401).json({
      success: false,
      msg:err.message,
    });
  }
  
}




//send report by status
module.exports.report_by_status = async (req,res) => {

  try {
      const reports = Report.find({ "status": req.params.status });
      reports.exec(function (err, rep) {
          return res.send(rep);
      });

  } catch (err) { 
      return res.status(500).json({
          message: err.message
      });
  }

}




