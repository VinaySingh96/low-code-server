module.exports = function errorMiddleware(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred', error: err.message });
}