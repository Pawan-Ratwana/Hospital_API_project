const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

  phone: {
    type: Number,
    maxlength: 10,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  doctorName: { 
    type: String,
  required: true 
}
},
  {
    timestamps: true
  });


// Sign JWT and return
//   patientSchema.methods.getSignedJwtToken = function() {
//   return jwt.sign({ id: this._id }, 'secret', {
//     expiresIn: '120m'
//   });
// };


const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;


