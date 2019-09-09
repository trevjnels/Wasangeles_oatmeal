import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Weather } from './Weather.jsx';
import moment from 'moment';

// import { RadialGauge } from '@progress/kendo-react-gauges';

// import { RadialGauge } from '@progress/kendo-react-gauges';

const tempParser = (temp) => {
	var splitTemp = ((temp - 273.15) * (9 / 5) + 32).toString(10).split('.');
	splitTemp[1] = splitTemp[1].slice(0, 2);
	var joined = splitTemp.join('.');
	return joined;
};

export class Temp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// BCC : {
			// 	currentTemp : 20,
			// 	maxTemp     : 30,
			// 	minTemp     : 13,
			// 	visibility  : 16093,
			// 	humidity    : 60,
			// 	wind        : { speed: 10.3, deg: 180, gust: 13.4 },
			// 	rain        : { '1h': 0.25 },
			// 	description : 'Rain',
			// 	sunrise     : 1567947629,
			// 	sunset      : 1567993707
			// },
			LCC : {
				currentTemp : 21,
				maxTemp     : 29,
				minTemp     : 12,
				visibility  : 16093,
				humidity    : 61,
				wind        : { speed: 12.3, deg: 181, gust: 15.4 },
				rain        : { '1h': 0.35 },
				description : 'Rain',
				sunrise     : 1567947629,
				sunset      : 1567993707
			}
		};
		this.weatherUpdate = this.weatherUpdate.bind(this);
	}
	weatherUpdate() {
		// axios
		// 	.get(`http://avyoats.com:3000/weather/BCC`)
		// 	// .then((data) => JSON.parse(data))
		// 	.then((data) => {
		// 		console.log(data['data']);
		// 		var stringed = data['data'];
		// 		var main = stringed['main'];

		// 		this.setState({
		// 			BCC : {
		// 				currentTemp : main['temp'],
		// 				maxTemp     : main['temp_max'],
		// 				minTemp     : main['temp_min'],
		// 				visibility  : stringed['visability'],
		// 				humidity    : main['humidity'],
		// 				wind        : {
		// 					speed : stringed['wind']['speed'],
		// 					deg   : stringed['wind']['deg'],
		// 					gust  : stringed['wind']['gust']
		// 				},
		// 				rain        : { '1h': stringed['rain']['1hr'] },
		// 				description : stringed['weather'][0]['main'],
		// 				sunset      : stringed['sys']['sunset'],
		// 				sunrise     : stringed['sys']['sunrise']
		// 			}
		// 		});
		// 		console.log('$$$$$', this.state['BCC']);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		axios
			.get(`http://avyoats.com:3000/weather/LCC`)
			// .then((data) => JSON.parse(data))
			.then((data) => {
				// console.log(data['data']);
				var stringed = data['data'];
				var main = stringed['main'];

				this.setState({
					LCC : {
						currentTemp : main['temp'],
						maxTemp     : main['temp_max'],
						minTemp     : main['temp_min'],
						visibility  : stringed['visability'],
						humidity    : main['humidity'],
						wind        : {
							speed : stringed['wind']['speed'],
							deg   : stringed['wind']['deg'],
							gust  : stringed['wind']['gust']
						},
						// rain        : { '1h': stringed['rain']['1hr'] },
						description : stringed['weather'][0]['main'],
						sunset      : stringed['sys']['sunset'],
						sunrise     : stringed['sys']['sunrise']
					}
				});
				// console.log('$$$$$', this.state['BCC']);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	componentDidMount() {
		this.weatherUpdate();
		setInterval(() => {
			this.weatherUpdate();
		}, 600000); //updates the weather every 10 min

		//hit server for current temps every min
	}

	render() {
		// if (this.props.site === 'BCC') {
		// 	temp = tempParser(this.state['BCC'].currentTemp);
		// 	return (
		// 		<div>
		// 			<h2>Brighton Weather (BCC)</h2>
		// 			<div>
		// 				<div>
		// 					<span>{temp} degress f</span>
		// 				</div>
		// 				{/* <div>
		// 					Mid: <span>{this.state['BCC'].mid} degress</span>
		// 				</div>
		// 				<div>
		// 					Top: <span>{this.state['BCC'].top} degress</span>
		// 				</div> */}
		// 			</div>
		// 		</div>
		// 	);
		// } else {
		var temp = tempParser(this.state['LCC'].currentTemp);
		return (
			<div>
				<h2>Alta Weather (LCC)</h2>
				<div>
					<div>
						<span>{temp} degrees F</span>
					</div>
					<div>
						<span>Sunrise: {'7:04 am'}</span>
					</div>
					<div>
						<span>
							WindSpeed: {this.state.LCC.wind.speed}mph, Direction: {this.state.LCC.wind.deg} degrees
						</span>
					</div>
					{/* <div>
							Mid: <span>{this.state['LCC'].mid} degress</span>
						</div>
						<div>
							Top: <span>{this.state['LCC'].top} degress</span>
						</div> */}
				</div>
			</div>
		);
	}
}

// https://api.weather.gov/points/40.5888,-111.6380
