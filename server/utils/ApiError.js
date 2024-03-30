class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = "",
        data
    ){
        super()
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
// const errorHandler = (statusCode, message, data) => {
//   return new ErrorHandler(statusCode, message, data);
// };
module.exports = ApiError;
