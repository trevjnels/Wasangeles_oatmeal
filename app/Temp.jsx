import React from 'react';
import ReactDOM from 'react-dom';

// import { RadialGauge } from '@progress/kendo-react-gauges';

// import { RadialGauge } from '@progress/kendo-react-gauges';

export class Temp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			BCC : {
				base : 20,
				mid  : 30,
				top  : 14
			},
			LCC : {
				base : 24,
				mid  : 20,
				top  : 12
			}
		};
	}

	componentDidMount() {
		//hit server for current temps every min
	}

	render() {
		if (this.props.site === 'BCC') {
			return (
				<div>
					<h2>Brighton Temps (BCC)</h2>
					<div>
						<div>
							Base: <span>{this.state['BCC'].base} degress</span>
						</div>
						<div>
							Mid: <span>{this.state['BCC'].mid} degress</span>
						</div>
						<div>
							Top: <span>{this.state['BCC'].top} degress</span>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h2>Alta Temps (LCC)</h2>
					<div>
						<div>
							Base: <span>{this.state['LCC'].base} degress</span>
						</div>
						<div>
							Mid: <span>{this.state['LCC'].mid} degress</span>
						</div>
						<div>
							Top: <span>{this.state['LCC'].top} degress</span>
						</div>
					</div>
				</div>
			);
		}
	}
}

// https://api.weather.gov/points/40.5888,-111.6380
