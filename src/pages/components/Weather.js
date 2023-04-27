import React from "react";

const WeatherCard = ({weatherData}) => (
    <div>
        <article>
            <header>You are currently in {weatherData.name} which is in {weatherData.sys.country}</header>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Feels like: {weatherData.main.feels_like}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Sunrise: {weatherData.sys.sunrise}</p>
            <p>Sunset: {weatherData.sys.sunset}</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </article>
    </div>
)

export default WeatherCard