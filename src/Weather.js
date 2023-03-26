import React, { useState } from "react";
import axios from "axios";


export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "717511f5e1c0dbfc617f361ab073e2e9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    console.log(response);

    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      {weather ? (
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°F</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} mph</li>

          <img alt="icon" src={weather.icon} />
        </ul>
      ) : null}
    </div>
  );
}
