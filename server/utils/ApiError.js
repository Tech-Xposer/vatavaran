class ApiError extends Error {
  constructor(statusCode, message, errors=[]) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}

module.exports = ApiError;
