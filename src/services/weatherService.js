import { DateTime } from 'luxon';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'YOUR_API_KEY';

// You can use weathr your own api key or the appid query value below to fetch the forecast data!
// https://api.openweathermap.org/data/2.5/onecall?lat=47.1667&lon=-1.5833&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (serviceType, searchParams) => {
     const url = new URL(BASE_URL + '/' + serviceType);
     url.search = new URLSearchParams({...searchParams, appid:API_KEY});
     return fetch(url)
          .then(res => res.json())
          .then(data => data);
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
     format = "ccc, dd, mm, yyyy | Local time: 'hh:mm a"
) => {
     DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
};

const getIconCode = (code) => {
     return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

export default getFormatedWeatherData;
export { formatToLocalTime, getIconCode };
