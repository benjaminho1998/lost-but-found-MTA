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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));