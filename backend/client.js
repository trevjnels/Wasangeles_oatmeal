//makes the various get requests to different services (UAC etc and stores in DB)
const request = require('request');
const axios = require('axios');
const { openWeatherKey } = require('../keys/privateKeys.js');
if (false) {
	//time between 6am and 9 am
	setTimeout(
		fetch(`https://utahavalanchecenter.org/forecast/${this.state.region}/json`)
			.then((data) => data.json())
			.then((jsond) => {
				this.setState({
					UACResults : {}
				});
			}),
		900000 //make the fetch every 15 min
	);
}

var brightonWeather = null;
var brightonLat = 40.6038;
var brightonLon = -111.5821;
var url = `https://api.openweathermap.org/data/2.5/weather?lat=${brightonLat}&lon=${brightonLon}&appid=${openWeatherKey}`;

request(url, function(err, resp, body) {
	if (err) {
		console.log(err);
	} else {
		console.log('body$$: ', body);
	}
});

// var brightonWeather =
// axios
// 	.get('api.openweathermap.org/data/2.5/weather?lat=40.6038&lon=-111.5821&appid=' + openWeatherKey, {
// 		proxy : { host: '127.0.0.1', port: 1337 }
// 	})
// 	.then((data) => JSON.parse(data))
// 	.then((parsed) => {
// 		console.log(parsed);
// 		return parsed;
// 	})
// 	.catch((err) => console.log(err));
// var altaWeather = axios
// 	.get('api.openweathermap.org/data/2.5/weather?lat=40.5888&lon=-111.6380&appid=' + openWeatherKey)
// 	.then((data) => JSON.parse(data))
// 	.then((parsed) => parsed)
// 	.catch((err) => console.log(err));

// console.log(brightonWeather);
// module.exports = { brightonWeather, altaWeather };
