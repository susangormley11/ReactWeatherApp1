import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeather] = useState({ready: false});
  const [city, setCity] = useState(props.onLoadCity);

    function handleResponse(response) {
        setWeather({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,

        });
    
    }

    function search() {
        const apiKey = "7bd9586b0c549c9ab96998e30e8e057f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }
  
    if(weatherData.ready) {
         return (
    <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="city-input"
          autiFocus="on"
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <button className="current-location">Current Location</button>

      <WeatherInfo data={weatherData} />
      <hr />
      <WeatherForecast city={weatherData.city} />
      <hr />
    </div>
  );
    }
     else {

        search();
  return "Loading";
     }
    
  
   
}
