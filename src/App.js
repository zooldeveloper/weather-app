import { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import getFormatedWeatherData from './services/weatherService';
import { formatToLocalTime, getIconCode } from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

     const [query, setQuery] = useState({ q: 'paris' });
     const [unit, setUnit] = useState('metric');
     const [timeAndLocation, setTimeAndLocation] = useState({});
     const [weather, setWeather] = useState({});
     
     useEffect(() => {
          const fetchWeatherData = async () => {
               const message = query.q ? query.q : 'current location';
               query.q && toast.info('Fetching weather data from ' + message);

               const data = await getFormatedWeatherData({...query, units: unit });
               setTimeAndLocation({
                    timezone: formatToLocalTime(data.dt, data.timezone),
                    location: `${data.name}, ${data.country}`
               });
               query.q && setTimeout(() => toast.success(`Successfully fetched data from ${data.name} ${data.country}`), 2000)
               setWeather(data);
          }
          fetchWeatherData();
     }, [query, unit])

     const handleStaticValue = (city) => {
          setQuery({ ...query, q: city });
     }

     const handleInputValue = (inputValue) => {
          setQuery({ ...query, q: inputValue });
     }

     const gradientBackground = () => {
          const threshold = unit === 'metric' ? 25 : 77;
          return weather.temp <= threshold ?
               'from-cyan-700 to-blue-700' :
               'from-yellow-700 to-orange-700';
     }

     return (
          <div
               className={`mx-auto my-3 p-5 md:px-20 max-w-3xl h-auto bg-gradient-to-br text-white flex flex-col 
               ${gradientBackground()}`}
          >
               <TopButtons handleStaticValue={handleStaticValue}/>
               <Inputs
                    handleInputValue={handleInputValue}
                    setQuery={setQuery}
                    setUnit={setUnit}
               />
               <TimeAndLocation timeAndLocation={timeAndLocation} />
               <WeatherDetails
                    weatherDetails={weather}
                    toLocalTime={formatToLocalTime}
                    iconCode={getIconCode}
               />
               <Forecast
                    title='HOURLY FORECAST'
                    forecast={weather.hourly}
                    iconCode={getIconCode}
               />
               <Forecast
                    title='DAILY FORECAST'
                    forecast={weather.daily}
                    iconCode={getIconCode}
               />
               <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    theme={'colored'}
                    newestOnTop={true}
               />
          </div>
     )
}

export default App;
