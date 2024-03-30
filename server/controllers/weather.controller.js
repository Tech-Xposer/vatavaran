const ApiError = require("../utils/ApiError");
const APiResponse = require("../utils/ApiResponse");

const getWeatherByIp = async (req, res) => {
  try {
    const ip = req.ip;
    console.log(ip);
    res.status(200).json(new APiResponse(200, "Your Ip Address", { ip }));
  } catch (error) {
    res.status(500).json(new ApiError(500, error.message || "Internal Server Error"));
  }
};

module.exports = { getWeatherByIp };
