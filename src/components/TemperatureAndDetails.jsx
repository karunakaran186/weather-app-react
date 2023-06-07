import React from "react";
import {
  UilArrowUp, 
  UilArrowDown, 
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({weather: { temp,
  feels_like,
  temp_min,
  temp_max,
  humidity,
  timezone,
  sunrise,
  sunset,
  details,
  icon,
  speed}}) {
  return (
    <div>
        <div className="flex text-white items-center justify-center py-4 font-extrabold cursor-pointer flex space-y-2 transition ease-out hover:scale-150">
            {details}
        </div>
        <div className="flex flex-row itemns-center justify-between 
        text-white py-2">
          <img src = {iconUrlFromCode(icon)} alt ="" 
          className="w-120 h-70 transation: ease-in hover:scale-110" 
          />
          <p className="text-7xl">{`${temp.toFixed()}°`}<p className="text-2xl">Approx</p></p>
          <div className="flex flex-col space-y-2">
            <div className="flex font-light text-slate-200 items-center justify-center">
              <UilTemperature size={20} className ="mr-2" />
              Real Time Temp
              <span className="font-medium ml-1.5">{`${feels_like.toFixed()}°`}</span>
            </div>
            <div className="flex font-light text-slate-200 items-center justify-center">
              <UilTear size={20} className ="mr-2" />
              Humidity
              <span className="font-medium ml-1.5">{`${humidity}%`}</span>
            </div>
            <div className="flex font-light text-slate-200 items-center justify-center">
              <UilWind size={20} className ="mr-2" />
              Wind speed
              <span className="font-medium ml-1.5">{`${speed.toFixed()}km/hr`}</span>
            </div>
          </div>
        </div>


        <div className="flex flex-auto items-center justify-center space-x-3 text-white text-sm py-4">

          <UilSun />
          <p className="font font-medium">
            Rise:<span className="font-mono leading-7 cursor-pointer flex transition ease-out hover:scale-90 nbsp;">{formatToLocalTime(sunrise, timezone, "hh:mm:ss a")}</span>
          </p>
          <p className="font-bold">|</p>

          <UilSunset />
          <p className="font-medium items-start justify-start">Set: <span className="font-mono leading-7 space-x-5 cursor-pointer flex transition ease-out hover:scale-90">{formatToLocalTime(sunset, timezone, "hh:mm:ss a")}</span>
          </p>
          <p className="font-bold">|</p>
          <UilArrowUp />
          <p className="font-medium items-start justify-start">Increase Temp: <span className="font-mono leading-7 space-x-5 cursor-pointer flex transition ease-out hover:scale-90">{`${temp_max.toFixed()}°`}</span>
          </p>
          <p className="font-bold">|</p>
          <UilArrowDown />
          <p className="font-medium items-start justify-start">Drop Temp: <span className="font-mono leading-7 space-x-5 cursor-pointer flex transition ease-out hover:scale-90">{`${temp_min}°`}</span>
          </p>
          
          
          
        </div>

    </div>
    
  );
}

export default TemperatureAndDetails;
