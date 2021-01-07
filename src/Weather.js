import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "7bd9586b0c549c9ab96998e30e8e057f";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city"
          className="city-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <button className="current-location">Current Location</button>

      <h1>London</h1>
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
            <span className="temperature">26</span>
            <span className="units">
              <span className="active">
                °C
              </span>{" "}
              |<span>°F</span>
            </span>
          </h2>
          <ul>
            <li className="condition">Sunny</li>
            <li>Humidity: %</li>
            <li>Wind: km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
