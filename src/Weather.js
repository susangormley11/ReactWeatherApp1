import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState("null");

    function handleResponse(response) {
        console.log(response.data);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.main.name,

        });
        setLoad(true);
    }
  
    if(load) {
         return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city"
          className="city-input"
          autiFocus="on"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <button className="current-location">Current Location</button>

      <h1>{props.onLoadCity}</h1>
      <div className="row">
        <div className="col-7">
          <ul>
            <li></li>
            <li></li>
            <li>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                className="icon" alt="weathericon"
              ></img>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h2>
            <span className="temperature">{Math.round(weather.temperature)}</span>
            <span className="units">
              <span className="active">
                °C
              </span>{" "}
              |<span>°F</span>
            </span>
          </h2>
          <ul>
            <li className="condition">{weather.description}</li>
            <li>Humidity: {weather.humidity} %</li>
            <li>Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
    }
     else {
const apiKey = "7bd9586b0c549c9ab96998e30e8e057f";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.onLoadCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading";
     }
    
  
   
}
