import React from 'react';
import './Weather.css';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const CurrentWeather = ({ weather, weatherIcon }) => {
  return (
    <>
      <img src={weatherIcon} alt="" className='weather-icon' />
      <p className='temperature'>
        {weather.main ? (weather.main.temp - 273).toFixed(2) : " "}°C
      </p>
      <p className='location'>{weather.name}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div className="humidity">
            <p>{weather.main ? weather.main.humidity : ""}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div className="wind">
            <p>{weather.wind ? weather.wind.speed : ""} m/s</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
