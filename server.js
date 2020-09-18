const express = require('express');
const app = express(); 
const xmlParser = require('xml2json');
const request = require('request');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/data', (req, res) => {
  request(
    { url: 'http://advisory.mtanyct.info/LPUWebServices/CurrentLostProperty.aspx' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      body = xmlParser.toJson(body);
      res.json(JSON.parse(body));
    }
  )
});

app.get('/weather', (req, res) => {
  request(
    { url: 'http://api.openweathermap.org/data/2.5/weather?q=New%20York%20City&appid=b8cedfac1134c2a5008ccbe84ebddbea' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.get('/news', (req, res) => {
  request(
    { url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=41b4f2a8284d4a6392f9c64f299d8241" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

