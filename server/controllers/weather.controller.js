const APiResponse = require("../utils/ApiResponse");

const getWeatherByIp = async (req,res)=>{
    const ip = req.ip
    console.log(ip);
    res.status(200).json(new APiResponse(200,"Success",{ip}))
}

module.exports = {getWeatherByIp}