const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '7c7480b56e137ebf6995f6218202929a';

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

const getFormatedWeatherData = async (searchParams) => {
     const formattedCurrentWeather = await getWeatherData
     ('weather', searchParams).then(data => formatCurrentWeather(data));

     const {lon, lat } = formattedCurrentWeather;

     return formattedCurrentWeather;
}


export default getFormatedWeatherData;
