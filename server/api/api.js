const end_point = "https://api.weatherapi.com/v1/";
const weatherByIp = async (ip) => {
  console.log(ip);
  const response = await fetch(
    `${end_point}current.json?key=${process.env.WEATHER_API_KEY}&q=${ip === "::1" ? "223.178.210.104":ip }`,
  );
  const data = await response.json();
  return data;
};

module.exports = {
  weatherByIp,
};
