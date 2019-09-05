import React from 'react';
const moment = require('moment');

const headerStyle = {
	marginLeft  : 'auto',
	marginRight : 'auto',
	alignSelf   : 'center',
	fontSize    : '2em'
}; //
const header2Style = {
	marginLeft  : 'auto',
	marginRight : 'auto',
	alignSelf   : 'center'
};
const moduleStyle = {
	display       : 'flex',
	flexDirection : 'column',
	alignItems    : 'center',
	alignSelf     : 'center'
};
export const AvyReport = (props) => {
	var clickShow =
		props.state.reportOpen ? '' :
		'(click to expand)';
	var {
		date_issued,
		current_conditions,
		mountian_weather,
		avalanche_problem_1,
		avalanche_problem_1_description,
		avalanche_problem_2,
		avalanche_problem_2_description,
		avalanche_problem_3,
		avalanche_problem_3_description,
		overall_danger_rating
	} = props.report;
	return (
		<div style={moduleStyle}>
			<h2
				style={headerStyle}
				onClick={() => {
					props.clickH('report');
				}}>
				{' '}
				Avy Report {clickShow}
			</h2>
			<div
				onClick={() => {
					props.clickH('report');
				}}
				style={props.reportStyle}
				className="report">
				<div>{date_issued}</div>
				<div>{current_conditions}</div>
				<div>{mountian_weather}</div>
				<h2 style={header2Style}>{avalanche_problem_1}</h2>
				<div>{avalanche_problem_1_description}</div>
				<h2 style={header2Style}>{avalanche_problem_2}</h2>
				<div>{avalanche_problem_2_description}</div>
				<h2 style={header2Style}>{avalanche_problem_3}</h2>
				<div>{avalanche_problem_3_description}</div>

				<h2 style={header2Style}>Relative Danger: {overall_danger_rating}</h2>
			</div>
		</div>
	);
};
// props.report.date_issued_timestamp
// moment(date).format('MMM Do YYYY, h:mm:ss a');
