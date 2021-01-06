import React from "react";
import "./Weather.css";

export default function Weather() {
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
                className="icon"
              ></img>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h2>
            <span className="temperature">26</span>
            <span className="units">
              <a href="#" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
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

      <a href="https://github.com/susangormley11/Weather-Project">
        Coded by Susan Gormley
      </a>
    </div>
  );
}
