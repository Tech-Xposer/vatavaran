import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Search } from "lucide-react";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (location) {
      getLocationWithCity();
    } else {
      getLocation();
    }
  }, [location]);

  const getLocationWithCity = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en&q=${location}`);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const dataJson = await response.json();
      setWeather(dataJson);
    } catch (error) {
      console.error("Error fetching weather:", error);
      // Handle error (e.g., show error message to the user)
    }
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en&q=${position.coords.latitude},${position.coords.longitude}`);
            if (!response.ok) {
              throw new Error("Failed to fetch weather data");
            }
            const dataJson = await response.json();
            
            setWeather(dataJson);
          } catch (error) {
            console.error("Error fetching weather:", error);
            // Handle error (e.g., show error message to the user)
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          // Handle error (e.g., show error message to the user)
        }
      );
    } else {
      console.error("Geolocation is not supported");
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="h-screen flex justify-center items-center align-center">
      <div className="flex flex-col items-center justify-center gap-5 m-2 h-[420px] w-[350px] bg-gradient-to-br from-purple-500 via-purple-700 to-indigo-600 rounded-xl">
        <div className="flex items-center justify-center mt-5 gap-5">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            placeholder="Search"
            className="w-[250px] text-center rounded-full p-2 transform transition-transform hover:scale-110"
          />
          <button
            onClick={getLocationWithCity}
            className="p-2 bg-white rounded-full items-center transform transition-transform hover:scale-110"
          >
            <Search />
          </button>
        </div>

        {weather ? <Card weather={weather} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Home;
