const Patient = require('../../../models/patient');

exports.register = async (req, res) => {
  try {
    const { name, phone, doctorId, doctorName } = req.body;

    // Check if patient with the same phone number already exists
    const existingPatient = await Patient.findOne({ phone });

    if (existingPatient) {
      return res.status(200).json({
        success: true,
        body: existingPatient,
        message: 'Patient with the same phone number already registered!'
      });
    }

    // Create an object to store patient data
    const patientData = {
      name,
      phone
    };


    // Add doctorName if provided
    if (doctorName) {
      patientData.doctorName = doctorName;
    }

    // Create a new patient with the combined data
    const patient = await Patient.create(patientData);

    return res.status(201).json({
      success: true,
      body: patient,
      message: 'Patient Registered Successfully!'
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Error Occurred!'
    });
  }
};
