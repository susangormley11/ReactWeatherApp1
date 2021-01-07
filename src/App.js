import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
     <Weather onLoadCity="London" />
     <footer>
       Created by Susan Gormley and open-sourced on <a href="https://github.com/susangormley11/ReactWeatherApp1" target="_blank" rel="noreferrer">GitHub</a>
     </footer>
     </div>
     </div>
    </div>
  );
}

