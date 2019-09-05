const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');

import { DangerRose } from './DangerRose.jsx';

// console.log(oatmeal);
const appStyle = {
	// backgroundImage : `url("${oatmeal}")`,
	color : 'red',
	width : '100vw'
};
const imageStyle = {
	transform : 'rotate(91deg)',
	width     : '120%',
	position  : 'fixed',
	top       : '0',
	zIndex    : '-1'
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rose : 'https://utahavalanchecenter.org//sites/default/files/forecast/201905/20190501-103022-5.png'
		};
	}
	render() {
		return (
			<div style={appStyle}>
				<h1>Avy Oatmeal</h1>
				<p>a bowl a day keeps the burial away</p>
				<DangerRose rose={this.state.rose} />
				<DangerRose rose={this.state.rose} />
				<DangerRose rose={this.state.rose} />
				<DangerRose rose={this.state.rose} />
				<DangerRose rose={this.state.rose} />
				<DangerRose rose={this.state.rose} />
				<DangerRose rose={this.state.rose} />

				<img style={imageStyle} src="oatmeal.jpg" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
