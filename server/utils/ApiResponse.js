class APiResponse{
    constructor(statusCode, message, data){
        this.statusCode = statusCode;
        this.status = statusCode<400 ? 'success' : 'fail';
        this.message = message;
        this.data = data;
    }
}

module.exports = APiResponse