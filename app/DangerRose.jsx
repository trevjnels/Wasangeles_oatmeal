import React from 'react';

export const DangerRose = (props) => {
	return (
		<div style={props.style}>
			<img src={'https://utahavalanchecenter.org/' + props.rose} />
		</div>
	);
};
