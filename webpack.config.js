var webpack = require('webpack');

module.exports = {
	entry: {
		'styles': './src/styles/main.scss',
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},
	output: {
		publicPath: '/dist',
		path: './public/dist/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.ts']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: ['node_modules', 'bower_components'],
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			// {
			//   test: /\.html$/,
			//   loader: 'html'
			// },
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'sass']
			}
		]
	},

	plugins: [
	],

	devServer: {
		contentBase: './public',
		headers: { 
			'Access-Control-Allow-Origin': '*'
		},
		hot: true,
		noInfo: true,
		stats: {
			colors: true
		}
	}
};
