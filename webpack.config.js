const merge = require('webpack-merge');


module.exports = function(env={}) {	
	env.NODE_ENV = env.NODE_ENV || process.env.NODE_ENV;
	env.BUILD_ENV = env.BUILD_ENV || process.env.BUILD_ENV;

	const configs = env.BUILD_ENV.split(' ').map(configName => {
		return require('./config/webpack.' + configName)(env);
	});

	const commonConfig = require('./config/webpack.common')(env);
	const final = merge.smart(commonConfig, ...configs);
	return final;
};
