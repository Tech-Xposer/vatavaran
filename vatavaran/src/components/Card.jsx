import React, { useState } from "react";
import { Wind, Waves } from "lucide-react";

const Card = ({ weather }) => {
  return (
    <div className="flex  flex-col p-4 ">
      <div className="flex justify-center items-center flex-col text-white ">
        <img
          src={`https:${weather.current.condition.icon}`}
          alt=""
          className="w-[100px] "
        />
        <h1 className="text-5xl">{weather.current.temp_c}°C</h1>
        <p className="text-xl mt-5">{weather.location.name}</p>
      </div>
      <div className="justify-center items-center flex text-white mt-5 p-4 space-x-10">
        <div className="flex items-center gap-5">
          <Waves className="scale-150" />
          <section className="flex flex-col items-start">
            <p className="text-xl">{weather.current.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </section>
        </div>
        <div className="flex items-center gap-5">
          <Wind className="scale-150" />
          <section className="flex flex-col items-start">
            <p className="text-xl">{weather.current.wind_kph}</p>
            <p className="text-sm">Wind Speed</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
