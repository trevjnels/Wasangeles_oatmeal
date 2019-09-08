//server supplies information from db

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const request = require('request');
const moment = require('moment');

const cors = require('cors');
const { openWeatherKey, bingMapsKey } = require('../keys/privateKeys.js');

var port = process.env.PORT || 3000;
// const { bingMapsKey } = require('../keys/keys.js');

const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Wth, Content-Type, Accept');
	next();
});
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('dist'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// https://www.bing.com/api/maps/mapcontrol?key=${bingMapsKey}&callback=loadMapScenario`
app.get('/radar', function(req, res) {
	request(
		` https://www.bing.com/api/maps/mapcontrol?key=${bingMapsKey}&callback=loadMapScenario`,
		(err, resp, body) => {
			if (err) {
				res.send(err).status(404);
			} else {
				res.send(body);
			}
		}
	);
});

app.get('/avyReport/:region', function(req, res) {
	request(`https://utahavalanchecenter.org/forecast/${req.params.region}/json`, (err, resp, body) => {
		if (err) {
			res.send(err).status(404);
		} else {
			res.send(body);
		}
	});
});

app.get('/:forecastOrWeather/:canyon', function(req, res) {
	// example: https://localhost:3000/forecast/BCC => gives you 5 day 3 hr forecast for Big cottenwood || https://localhost:3000/weather/LCC => gives you current conditions for little cottenwood
	var lat, long;
	var { canyon, forecastOrWeather } = req.params;
	if (canyon === 'BCC') {
		lat = 40.6038;
		long = -111.5821;
	}
	if (canyon === 'LCC') {
		lat = 40.5888;
		long = -111.638;
	}
	var url = `https://api.openweathermap.org/data/2.5/${forecastOrWeather}?lat=${lat}&lon=${long}&appid=${openWeatherKey}`;

	request(url, function(err, resp, body) {
		if (err) {
			console.log(err);
		} else {
			// console.log('body$$: ', body);
			res.send(body);
		}
	});
});
app.listen(port, () => {
	console.log('Skinnin uphill on port: ' + port);
});
