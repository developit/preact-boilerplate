require('babel-register');
var webpack = require('../webpack.config.babel.js');

module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['mocha', 'chai-sinon'],
		reporters: ['mocha'],

		browsers: ['PhantomJS'],

		files: [
			'test/browser/**/*.js'
		],

		preprocessors: {
			'test/**/*.js': ['webpack'],
			'src/**/*.js': ['webpack'],
			'**/*.js': ['sourcemap']
		},

		webpack: webpack,
		webpackMiddleware: { noInfo: true }
	});
};
