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

app.get('/maps', (req, res) => {
	res.send(`function loadMapScenario() {
		var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
				/* No need to set credentials if already passed in URL */
				center: new Microsoft.Maps.Location(40.616332, -111.6844868),
				zoom: 10});
		// tile url from Iowa Environmental Mesonet of Iowa State University
		var urlTemplate = 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-{timestamp}/{zoom}/{x}/{y}.png';
		var timestamps = ['900913-m50m', '900913-m45m', '900913-m40m', '900913-m35m', '900913-m30m', '900913-m25m', '900913-m20m', '900913-m15m', '900913-m10m', '900913-m05m', '900913'];
		var tileSources = [];
		for (var i = 0; i < timestamps.length; i++) {
				var tileSource = new Microsoft.Maps.TileSource({
						uriConstructor: urlTemplate.replace('{timestamp}', timestamps[i])
				});
				tileSources.push(tileSource);
		}
		var animatedLayer = new Microsoft.Maps.AnimatedTileLayer({ mercator: tileSources, frameRate: 500 });
		map.layers.insert(animatedLayer);
		
}`);
}); // helper function to expose the map ojbect to the dom. COuld have had it in the html but wanted to serve from here.

if (unix > 1571137200) {
	// request(`https://utahavalanchecenter.org/forecast/${req.params.region}/json`, (err, resp, body) => {
	// if (err) {
	// 	console.log(err)
	// } else {
	// }
	// });
}

app.get('/avyReport/:region', function(req, res) {
	var day = 86400; //num of ms in day
	var unix = Math.floor(Date.now() * 0.1 * 0.1 * 0.1);
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
