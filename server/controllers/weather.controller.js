const { weatherByIp } = require("../api/api");
const ApiError = require("../utils/ApiError");
const APiResponse = require("../utils/ApiResponse");
var requestIp = require("request-ip");

const getWeatherByIp = async (req, res) => {
  try {
    const ip = requestIp.getClientIp(req);
    const response = await weatherByIp(ip);
    if(!response) throw new ApiError(500, "Internal Server Error");
    const data = {
      location:{
        name:response.location.name,
        region:response.location.region,
        country:response.location.country,
        localtime:response.location.localtime
      },
      current:{
        temp_c:response.current.temp_c,
        humidity:response.current.humidity,
        cloud:response.current.cloud,
        wind_kph:response.current.wind_kph,
        condition:{
          text:response.current.condition.text,
          icon:response.current.condition.icon
        }
      }
    }
    res
      .status(200)
      .json(new APiResponse(200, "Weather Fetch Successfully",  data ));
  } catch (error) {
    res
      .status(500)
      .json(new ApiError(500, error.message || "Internal Server Error"));
  }
};

module.exports = { getWeatherByIp };
