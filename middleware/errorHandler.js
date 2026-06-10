const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ message: 'Validation Error', errors });
  }

  // Mongoose Cast Error (invalid ID)
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    return res.status(409).json({ message: 'Duplicate key error', field: err.keyValue });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;