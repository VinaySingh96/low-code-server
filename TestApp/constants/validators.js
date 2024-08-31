function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^[7-9]\d{9}$/;
  return phoneRegex.test(phoneNumber);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  validatePhoneNumber,
  validateEmail
}