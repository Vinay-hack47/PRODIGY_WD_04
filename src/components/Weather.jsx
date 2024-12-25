import React, { useState, useEffect } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import DisplayWeather from './DisplayWeather';

let WEATHER_API_KEY = import.meta.env.VITE_APP_ID;

const Weather = () => {
  const [place, setPlace] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherIcon, setWeatherIcon] = useState(clear_icon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherDataByCoords(latitude, longitude);
    });
  }, []);

  const getWeatherData = async () => {
    if (place && place.length > 0) {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}`;
        let res = await fetch(url);
        let data = await res.json();
        setWeather(data);
        updateWeatherIcon(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getWeatherDataByCoords = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
      let res = await fetch(url);
      let data = await res.json();
      setWeather(data);
      updateWeatherIcon(data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateWeatherIcon = (data) => {
    if (data.weather && data.weather.length > 0) {
      const main = data.weather[0].main.toLowerCase();
      switch (main) {
        case 'clear':
          setWeatherIcon(clear_icon);
          break;
        case 'clouds':
          setWeatherIcon(cloud_icon);
          break;
        case 'drizzle':
          setWeatherIcon(drizzle_icon);
          break;
        case 'rain':
          setWeatherIcon(rain_icon);
          break;
        case 'snow':
          setWeatherIcon(snow_icon);
          break;
        default:
          setWeatherIcon(clear_icon);
          break;
      }
    }
  };

  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder="Search" value={place} onChange={(event) => setPlace(event.target.value)} />
        <img src={search_icon} alt="Search" onClick={getWeatherData} />
      </div>

      <DisplayWeather weather={weather} weatherIcon={weatherIcon} />
    </div>
  );
};

export default Weather;


