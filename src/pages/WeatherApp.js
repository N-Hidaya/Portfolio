import { Link } from "gatsby-link";
import React, {useState, useEffect} from "react";
import WeatherCard from "./components/Weather";


export default function WeatherApp() {
    const [latitude, setLat] = useState([])
    const [longitude, setLong] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.GATSBY_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.GATSBY_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result)
            });
        }
        fetchData();
    }, [latitude, longitude])
    return (
        <div className="WeatherApp">
            <Link to="/">Home Page</Link>

            {(typeof data.main != 'undefined') ? (
            <WeatherCard weatherData={data}/>

            ): (
                <div></div>
            )}
        </div>
    )
}

