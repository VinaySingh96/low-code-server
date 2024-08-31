const crypto = require('crypto');

function generateOTP(length) {
  const otp = crypto.randomInt(Math.pow(10, length - 1), Math.pow(10, length)).toString();
  return otp;
}

module.exports = {
  generateOTP
}