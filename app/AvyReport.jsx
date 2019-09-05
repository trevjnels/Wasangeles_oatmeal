import React from 'react';
const moment = require('moment');

export const AvyReport = (props) => {
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
		<div>
			<h2
				onClick={() => {
					props.clickH('report');
				}}>
				Avy Report (click to expand)
			</h2>
			<div style={props.reportStyle} className="report">
				<div>{date_issued}</div>
				<div>{current_conditions}</div>
				<div>{mountian_weather}</div>
				<h2>{avalanche_problem_1}</h2>
				<div>{avalanche_problem_1_description}</div>
				<h2>{avalanche_problem_2}</h2>
				<div>{avalanche_problem_2_description}</div>
				<h2>{avalanche_problem_3}</h2>
				<div>{avalanche_problem_3_description}</div>
				<div>
					<h2>Danger: {overall_danger_rating}</h2>
				</div>
			</div>
		</div>
	);
};
// props.report.date_issued_timestamp
// moment(date).format('MMM Do YYYY, h:mm:ss a');
