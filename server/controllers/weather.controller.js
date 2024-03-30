const ApiError = require("../utils/ApiError");
const APiResponse = require("../utils/ApiResponse");
var requestIp = require("request-ip");

const getWeatherByIp = async (req, res) => {
  try {
    const ip = requestIp.getClientIp(req);

    console.log(ip);
    res
      .status(200)
      .json(new APiResponse(200, "Weather Fetch Successfully", { ip }));
  } catch (error) {
    res
      .status(500)
      .json(new ApiError(500, error.message || "Internal Server Error"));
  }
};

module.exports = { getWeatherByIp };
