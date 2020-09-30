import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Sidebar.sass';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SideBar = () => {
    const [responses, setResponses] = useState({ weather: null, news: null});
    const weatherUrl = "https://lbfbackend.herokuapp.com/weather";
    const newsUrl = "https://lbfbackend.herokuapp.com/news";
    const numberOfNews = 3;
    let temp = '';
    let iconID = '';
    let newsArray = null;

    const getWeather = () => axios.get(weatherUrl);
    const getNews = () => axios.get(newsUrl);

    useEffect (() => {
        const fetchData = async () => {
            const weatherRes = await getWeather();
            const newsRes = await getNews();
            setResponses({
                weather: weatherRes.data, 
                news: newsRes.data, 
            });
        }
        fetchData();
    }, []);

    if(responses.weather) {
        temp = Math.round((responses.weather.main.temp - 273.15) * 1.8 + 32);
        iconID = responses.weather.weather[0].icon;
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const createNewsArray = () => {
        const arr = [...responses.news.articles];
        let newsArray = [];
        for(let i = 0; i < numberOfNews; i++) {
            const index = randomNumber(0, arr.length);
            if(newsArray.includes(arr[index])) {
                i--;
            } else {
                newsArray.push(arr[index])
            }
        }
        return newsArray;
    }

    if(responses.news) {
        newsArray = createNewsArray();
    }

    return (
        <div>
             <Card className="card-shadow sidebar" style={{backgroundColor: "#F1F2F4"}}>
                 <Card.Header className="card-title">
                     Weather and News
                 </Card.Header>
                <iframe 
                    className="live-video" src="https://www.youtube.com/embed/mRe-514tGMg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Times Square Livestream">
                </iframe>
                 <Card.Body>
                    <Card.Text>
                        <span className="card-title">New York City</span>
                        <LocationOnIcon fontSize="large" className="pin" /> <br></br>
                        <span className="weather-body">
                            <img className="icon" src={`http://openweathermap.org/img/wn/${iconID}.png`} alt="weather icon"></img>
                            <strong>{temp}</strong>°F
                        </span> <br></br> <br></br>
                        <span className="card-title">Trending News</span>
                        {newsArray && newsArray.map((article, i) => 
                            <div key={i} className="article-container">
                                <div>
                                    <strong>{article.source.name}</strong>
                                </div>
                                <a className="news-link" target="_blank" rel="noopener noreferrer" href={article.url}>
                                    {article.title}
                                </a>
                            </div>
                        )}
                    </Card.Text>
                 </Card.Body>
             </Card>
         </div>
     );
 }

export default SideBar;