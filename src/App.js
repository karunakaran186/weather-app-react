import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { Flip, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {UilChatBubbleUser} from "@iconscout/react-unicons";

function App() {
  const [query, setQuery] = useState({ q: "Coimbatore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message, {
        autoClose: 400,
        transition: Flip
      });

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`,{
          position: "top-right",
pauseOnHover: true,
draggable: true,
transition:Zoom,
theme: "dark",
          }
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "bg-gradient-to-br from-teal-600 via-teal-800 to-teal-950";
    const threshold = units === "metric" ? 23 : 90;
    if (weather.temp <= threshold) return "bg-gradient-to-br from-teal-600 via-teal-800 to-teal-950";

    return "from-yellow-950 to-red-700";
  
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      
    >
      <p className="text-white font-bold flex justify-center  h-12">Know your weather</p>
      
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={2000} theme="dark" newestOnTop={true} position="top-right" hideProgressBar={false}

closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
<div className="flex font-bold text-slate-200 items-center justify-center">
              <UilChatBubbleUser size={20} className ="mr-2" />
              Devloped by Karunakaran Vijayaraghavan
              <span className="font-medium ml-1.5 w-5 h-12"></span>
            </div>
    </div>
    
  );
}

export default App;
