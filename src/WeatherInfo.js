import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-7">
          <ul>
            <li><FormatDate date={props.data.date} /></li>
            <li></li>
            <li>
              <WeatherIcon code={props.data.icon} />

            </li>
          </ul>
        </div>
        <div className="col-5">
          <h2>
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="units">
              <span className="active">
                °C
              </span>{" "}
              |<span>°F</span>
            </span>
          </h2>
          <ul>
            <li className="condition">{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>);
}