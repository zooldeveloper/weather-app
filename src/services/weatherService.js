import { DateTime } from 'luxon';
import axios from 'axios';

const getWeatherData = async (serviceType, searchParams) => {

     const options = {
          method: 'GET',
          url: 'http://localhost:8000',
          params: [searchParams, { serviceType: serviceType }],
          Headers: {
               'Content-Type': 'application/json'
          }
     }

     let data;

     await axios.request(options)
          .then(response => data = response.data)
          .catch(error => console.log(error));
     
     return data
}

const formatCurrentWeather = (data) => {
     const {
          coord: { lon, lat },
          main: { temp, feels_like, temp_min, temp_max, humidity },
          wind: { speed },
          sys: { country, sunrise, sunset },
          weather, dt, timezone, name,
     } = data;

     const { main, description, icon } = weather[0]

     return {lon, lat, main, description, icon, temp, feels_like, temp_min, temp_max, humidity, speed, country, sunrise, sunset, dt, timezone, name};
}

const fomatForecastWeather = (data) => {
     let { timezone, hourly, daily } = data
     
     hourly = hourly.slice(1, 6).map(day => {
          return {
               title: formatToLocalTime(day.dt, timezone, 'hh:mm a'),
               temp: day.temp,
               icon: day.weather[0].icon
          }
     })

     daily = daily.slice(1, 6).map(day => {
          return {
               title: formatToLocalTime(day.dt, timezone, 'ccc'),
               temp: day.temp.day,
               icon: day.weather[0].icon
          }
     })
     return { timezone, hourly, daily}
}


const getFormatedWeatherData = async (searchParams) => {
     
     const formattedCurrentWeather = await getWeatherData
     ('weather', searchParams).then(data => formatCurrentWeather(data));
 
     const { lon, lat } = formattedCurrentWeather;

     const formattedForecastWeather = await getWeatherData
          ('onecall', { lon, lat, exclude: 'current,minutely,alerts', units: searchParams.units }).then(data => fomatForecastWeather(data))

     return { ...formattedCurrentWeather, ...formattedForecastWeather};
}

const formatToLocalTime = (
     secs,
     zone,
     format = "cccc, LLLL, dd, yyyy' | Local time: 'hh:mm a"
) => {
     return DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
};

const getIconCode = (code) => {
     return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

export default getFormatedWeatherData;
export { formatToLocalTime, getIconCode };
