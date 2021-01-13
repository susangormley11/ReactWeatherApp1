import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-7">
          <ul className="weather-list">
            <li><FormatDate date={props.data.date} /></li>
            <li></li>
            <li className="weather-icon">
              <WeatherIcon size={180} code={props.data.icon} />

            </li>
          </ul>
        </div>
        <div className="col-5">
          <WeatherTemperature celcius={props.data.temperature} />
          <ul className="weather-list">
            <li className="condition">{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>);
}