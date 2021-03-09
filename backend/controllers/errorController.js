const errorController = (err, req, res, next) => {
  res.status(err.request.res.statusCode).json({
    status: 'failure',
    message: err.request.res.statusMessage,
  });
};

module.exports = errorController;
