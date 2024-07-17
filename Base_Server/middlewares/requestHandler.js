// middleware.js
function requestHandler(req, res, next) {
  try {
    next();
  } catch (error) {
    console.log(error)
  }
}

module.exports = requestHandler;
