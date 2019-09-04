const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var port = process.env.PORT || 3000;

const app = express();
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Wth, Content-Type, Accept');
	next();
});
app.use(bodyParser.json());
app.use('/', express.static('public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.listen(port, () => {
	console.log('Skinnin uphill on port: ' + port);
});
