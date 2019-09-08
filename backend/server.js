//server supplies information from db

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fetch = require('node-fetch');

var port = process.env.PORT || 3000;
const { bingMapsKey } = require('../keys/keys.js');

const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Wth, Content-Type, Accept');
	next();
});
app.use(bodyParser.json());
app.use('/', express.static('dist'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/avyReport', function(req, res) {});
app.get('/wind', function(req, res) {});
app.get('/temp', function(req, res) {});
app.listen(port, () => {
	console.log('Skinnin uphill on port: ' + port);
});
