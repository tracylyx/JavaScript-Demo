const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
     			'css-loader'
 			]
		}]
	}
}