import React from 'react';

const camsContainerStyle = {
	display        : 'flex',
	flexDirection  : 'row',
	alignItems     : 'center',
	justifyContent : 'space-between',
	width          : '85vw'
};
const camStyle = {
	border       : '2vw #0A4287 solid',
	borderRadius : '2vw',
	marginTop    : '-1.5vw'
	// width        : '95%'
	// height       : 'auto'
};

export const WebCams = (props) => {
	return (
		<div style={camsContainerStyle}>
			<div>
				<h2>BCC Cams</h2>
				<div>
					<div>
						<p>4.1 Miles Up</p>
						<img style={camStyle} src="http://udottraffic.utah.gov/1_devices/aux16212.jpeg" />
					</div>{' '}
					<div>
						<p>10 Miles Up</p>
						<img style={camStyle} src="http://udottraffic.utah.gov/1_devices/aux16214.jpeg" />
					</div>
					<div>
						<p>12.54 Miles Up</p>
						<img style={camStyle} src="http://udottraffic.utah.gov/1_devices/aux16216.jpeg" />{' '}
					</div>
				</div>
			</div>
			<div>
				<h2>LCC Cams</h2>
				<div>
					<div>
						<p>5.96 Miles Up</p>
						<img style={camStyle} src="http://udottraffic.utah.gov/1_devices/aux16265.jpeg" />
					</div>
					<div>
						<p>7.4 Miles Up - (Mount Superior SE Ridge Shown)</p>
						<img style={camStyle} src="http://udottraffic.utah.gov/1_devices/aux16267.jpeg" />
					</div>
					<div>
						<p>8.7 Miles Up</p>
						<img style={camStyle} src="http://udottraffic.utah.gov/1_devices/aux16269.jpeg" />
					</div>
				</div>
			</div>
		</div>
	);
};
