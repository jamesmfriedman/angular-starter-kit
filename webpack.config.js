const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

let config = {
	entry: {
		'styles': './src/styles.js',
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/app.ts'
	},
	output: {
		publicPath: '/dist/',
		path: './public/dist/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
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
			{
			  	test: /\.html$/,
			  	loader: 'html'
			},
			{
				test: /\.scss$/,
				loaders: ['raw', 'postcss', 'sass']
			}
		]
	},
    
    postcss: function () {
        return [autoprefixer];
    },
    awesomeTypescriptLoaderOptions: {
    	useWebpackText: true // Allows other loaders to be chained to awesome-typescript-loader.
  	},

	plugins: [
	 	new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
		new webpack.optimize.CommonsChunkPlugin({
	    	name: ['app', 'vendor', 'polyfills', 'styles']
	  	}),
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

/**
 * DEV
 */
if (process.env.NODE_ENV === 'DEV') {
	let tsLoaders = config.module.loaders[0].loaders;
	tsLoaders.unshift('@angularclass/hmr-loader');
}

/**
 * PRODUCTION
 */
if (process.env.NODE_ENV === 'PRODUCTION') {
	
}


module.exports = config;