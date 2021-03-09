class AppError {
  constructor(statusCode, message) {
    this.request = {
      res: {
        statusCode: statusCode,
        status: 'failure',
        statusMessage: message,
      },
    };
  }
}

module.exports = AppError;
