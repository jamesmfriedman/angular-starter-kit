const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
	// merge together build and environment variables
	// to be made available in process.env
	const processEnv = Object.assign({}, env, require('./env.' + env.NODE_ENV));
	console.log('process.env:', processEnv);

    return {
		entry: {
			'dist/styles': './src/styles.js',
			'dist/polyfills': './src/polyfills.ts',
			'dist/vendor': './src/vendor.ts',
			'dist/app': './src/main.ts'
		},
		output: {
			publicPath: '/',
			path: __dirname + '/../public/',
			filename: '[name].js',
			chunkFilename: '[id].chunk.js'
		},
		resolve: {
			extensions: ['.js', '.ts']
		},
		module: {
			loaders: [
				{
					test: /\.ts$/,
					loader: ['awesome-typescript-loader', 'angular2-template-loader'].join('!')
				},
				{
					test: /\.html$/,
					loader: 'html-loader'
				},
				{
					test: /\.scss$/,
					loaders: [
						'raw-loader', 
						'postcss-loader?config=./config/postcss.config.js', 
						'sass-loader'
					]
				}
			]
		},
		
		plugins: [
			// fixes some context bugs in angular core
			new webpack.ContextReplacementPlugin(
				/angular(\\|\/)core(\\|\/)@angular/, __dirname + '/src'
			),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(processEnv)
			}),
			new HtmlWebpackPlugin({
				title: 'Angular Starter Kit',
				filename: 'index.html',
				template: 'src/index.html'
			})
		]
	};
};