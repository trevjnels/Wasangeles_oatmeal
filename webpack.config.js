var path = require('path');
var SRC_DIR = path.join(__dirname, '/app');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
	entry  : `${SRC_DIR}/App.jsx`,
	output : {
		filename : 'bundle.js',
		path     : DIST_DIR
	},
	module : {
		rules : [
			{
				test    : /\.jsx?/,
				include : SRC_DIR,
				loader  : 'babel-loader',
				query   : {
					presets : [
						'react',
						'es2015'
					]
				}
			}
		]
	}
};
