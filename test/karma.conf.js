require('babel-register');
var webpack = require('../webpack.config.babel.js');
var path = require('path');

webpack.module.loaders.push({
	test: /\.jsx?$/,
	loader: 'isparta',
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

		webpack: webpack,
		webpackMiddleware: { noInfo: true }
	});
};
