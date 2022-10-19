import { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import getFormatedWeatherData from './services/weatherService';
import { formatToLocalTime, getIconCode } from './services/weatherService';

function App() {

     const [query, setQuery] = useState({ q: 'paris' });
     const [unit, setUnit] = useState('metric');
     const [timeAndLocation, setTimeAndLocation] = useState({});
     const [weather, setWeather] = useState({});
     
     useEffect(() => {
          const fetchWeatherData = async () => {

               const data = await getFormatedWeatherData({...query, units: unit });
               setTimeAndLocation({
                    timezone: formatToLocalTime(data.dt, data.timezone),
                    location: `${data.name}, ${data.country}`
               });
               setWeather(data)
          }
          fetchWeatherData();
     }, [query, unit])

     const handleStaticValue = (city) => {
          setQuery({ ...query, q: city });
     }

     const handleInputValue = (inputValue) => {
          setQuery({ ...query, q: inputValue });
     }

     return (
          <div className='mx-auto my-3 p-5 md:px-20 max-w-3xl h-auto bg-gradient-to-br from-cyan-700 to-blue-700 text-white flex flex-col'>
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
          </div>
     )
}

export default App;
