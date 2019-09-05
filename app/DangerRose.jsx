import React from 'react';

var imageStyle = {
	height : '80%',
	width  : '80%'
};
export const DangerRose = (props) => {
	return (
		<div style={props.style}>
			<img style={imageStyle} src={'https://utahavalanchecenter.org/' + props.rose} />
		</div>
	);
};
