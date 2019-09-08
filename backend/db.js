const pg = require('pg');
const { pgUser, pgPassword, awsEndpoint } = require('../keys/privateKeys.js');

const pool = new pg.Pool({
	user     : pgUser,
	password : pgPassword,
	host     : awsEndpoint,
	database : 'avyreports',
	port     : 5432
});
// var dbConfig = {
// 	user     : pgUser,
// 	password : pgPassword,
// 	host     : awsEndpoint,
// 	database : 'avyreports',
// 	port     : 5432
// };

// var client = new pg.Client(dbConfig);
// client.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('yay');
// 	}
// });
// client.end()
// pool.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('sucess');
// 	}
// });
var createTableString =
	'CREATE TABLE report(id serial PRIMARY KEY, date_issued VARCHAR (300) NOT NULL, current_conditions VARCHAR (1000) NOT NULL, avalanche_problem_1 VARCHAR (100) NOT NULL, avalanche_problem_2 VARCHAR (100) NOT NULL, avalanche_problem_3 VARCHAR (100) NOT NULL, avalanche_problem_1_description VARCHAR (2000) NOT NULL, avalanche_problem_2_description VARCHAR (2000) NOT NULL, avalanche_problem_3_description VARCHAR (2000) NOT NULL, bottom_line VARCHAR (500) NOT NULL, overall_danger_rose_image VARCHAR (100) NOT NULL, overall_danger_rating VARCHAR (50) NOT NULL, created_on TIMESTAMP NOT NULL)';

pool.query(createTableString, (err, resp) => {
	if (err) console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ error in initailize reports'), console.log(err);
	else {
		console.log('sucessfully loaded into DB');
	}
});
// date_issued
// current_conditions
// avalanche_problem_1
// avalanche_problem_1_description
// avalanche_problem_2
// avalanche_problem_2_description
// avalanche_problem_3
// avalanche_problem_3_description
// bottom_line
// overall_danger_rose_image
// overall_danger_rating
