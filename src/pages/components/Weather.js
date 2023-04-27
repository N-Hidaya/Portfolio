import React from "react";

const WeatherCard = ({weatherData}) => (
    <div>
        <article>
            <header>{weatherData.name}</header>
        </article>
    </div>
)

export default WeatherCard