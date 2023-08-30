const Doctor=require('../../../models/doctor');
const jwt=require('jsonwebtoken');


// Register the doctor in app
module.exports.register = async function(req, res) {
  try {
    const { username, email, password } = req.body;
    
    // Check if doctor with the given email already exists
    const existingDoctor = await Doctor.findOne({ email });

    if (existingDoctor) {
      return res.status(409).json({
        success: false,
        body:existingDoctor,
        message: "Doctor already exists with this email"
      });
    }

    const doctor = await Doctor.create({
      username, // Added 'username' field
      email,
      password
    });
    return res.status(200).json({
      success: true,
      body:doctor,
      message: "Doctor created successfully"
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


//Doctor Login
module.exports.login= async (req, res)=>{
  try {

    let { email, password } = req.body;


    let doctor = await Doctor.findOne({ email: email });
    if (!doctor) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid Username or Password!" 
      });
    }

    // Check if password matches // we are calling function from Doctor model bcrypt function.
    const isMatch = await doctor.matchPassword(password);
    // Error handling if invalid password
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid Password!" 
      });
    }

    // Get JWT token
    const token = doctor.getSignedJwtToken();

    // Return response
    res.status(200).json({
      success: true,
      body: doctor,
      message: `Log In Sucessful! Keep the Token safely  ${doctor.username}!`,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message:'Error Occoured!'
    });
  }
}
