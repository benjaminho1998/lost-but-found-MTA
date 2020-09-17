import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Sidebar.sass';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SideBar = () => {
    const [weather, setWeather] = useState(null);
    const url = "/weather"
    let temp = '';
    let weatherDesc = '';

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setWeather(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    //41b4f2a8284d4a6392f9c64f299d8241

    function capitalize(description) {
        const str = description.charAt(0).toUpperCase() + description.slice(1, description.length);
        return str;
    }

    if(weather) {
        console.log(weather);
        weatherDesc = capitalize(weather.weather[0].description);
        temp = Math.round((weather.main.temp - 273.15) * 1.8 + 32);
    }

    return (
        <div>
             <Card className="card-shadow sidebar" style={{backgroundColor: "#F1F2F4"}}>
                 <Card.Header className="card-title">
                     News and Weather
                 </Card.Header>
                <iframe 
                    className="live-video" src="https://www.youtube.com/embed/mRe-514tGMg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Times Square Livestream">
                </iframe>
                 <Card.Body>
                    <Card.Text>
                        <span className="card-title">New York City</span>
                        <LocationOnIcon fontSize="large" className="pin" /> <br></br>
                        <span className="weather-body">
                            {weatherDesc} <br></br>
                            <strong>{temp}</strong>°F
                        </span> <br></br> <br></br>
                        <span className="card-title">Trending News</span>
                    </Card.Text>
                 </Card.Body>
             </Card>
         </div>
     );
 }

export default SideBar;