const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Define the Doctor schema
const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Encrypt password before saving
doctorSchema.pre("save", async function() {
  // Generate a salt with 10 rounds
  const salt = await bcrypt.genSalt(10);
  
  // Hash the password using the generated salt
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
doctorSchema.methods.getSignedJwtToken = function() {
  // Create a JWT containing the doctor's ID and sign it with a secret key
  return jwt.sign({ id: this._id }, 'secret', {
    expiresIn: '120m' // Token expires in 120 minutes
  });
};

// Compare entered password with stored password
doctorSchema.methods.matchPassword = async function(enteredPassword) {
  // Compare the entered password with the stored hashed password
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create the Doctor model using the schema
const Doctor = mongoose.model('Doctor', doctorSchema);

// Export the Doctor model
module.exports = Doctor;
