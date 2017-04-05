var webpackConfig = require('./webpack.config')();
webpackConfig.entry = {test: './src/test'};

module.exports = function (config) {
	config.set({
		basePath: '',
		mime: { 'text/x-typescript': ['ts','tsx'] },

		frameworks: ['jasmine'],

		files: [
			{pattern: 'src/karma-test-shim.js', watched: false}
		],

		preprocessors: {
			'src/karma-test-shim.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: 'errors-only'
		},

		webpackServer: {
			noInfo: true
		},

		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true
	});
};