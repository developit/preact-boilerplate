require('babel-register');
const webpack = require('../webpack.config.babel.js');
const path = require('path');

webpack.module.rules.push({
	test: /\.jsx?$/,
	loader: 'isparta-loader',
	include: path.resolve(__dirname, '../src')
});

module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['mocha', 'chai-sinon'],
		reporters: ['mocha', 'coverage'],
		coverageReporter: {
			reporters: [
				{
					type: 'text-summary'
				},
				{
					type: 'html',
					dir: 'coverage',
					subdir: '.'
				}
			]
		},

		browsers: ['PhantomJS'],

		files: [
			'test/browser/**/*.js'
		],

		preprocessors: {
			'test/**/*.js': ['webpack'],
			'src/**/*.js': ['webpack'],
			'**/*.js': ['sourcemap']
		},

		webpack,
		webpackMiddleware: { noInfo: true }
	});
};
