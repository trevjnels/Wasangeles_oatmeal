import React from 'react';
import ReactDOM from 'react-dom';

// import { RadialGauge } from '@progress/kendo-react-gauges';

// import { RadialGauge } from '@progress/kendo-react-gauges';

export class Temp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value : 0
		};
	}

	componentDidMount() {}

	render() {
		return <div>{/* <RadialGauge {...radialOptions} /> */}</div>;
	}
}

// https://api.weather.gov/points/40.5888,-111.6380
