const mongoose = require("mongoose");
const { validatePhoneNumber } = require('../../../constants/validators');

// update schema according to usage
const OtpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 4
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: validatePhoneNumber,
        message: props => `${props.value} is not a valid phone number! It must start with 7, 8, or 9 and contain exactly 10 digits.`
      }
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: '10m'
    },
    expiresIn: {
      type: Date,
      default: () => new Date(Date.now() + 10*60000)
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('otp', OtpSchema);