const path = require('path');
const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = function(env) {
	
    return {
		devtool: false,

		module: {
			loaders: [{ test: /\.ts$/, loader: '@ngtools/webpack' }]
		},
		
		plugins: [
            new webpack.optimize.CommonsChunkPlugin({
				name: 'commons',
				filename: 'commons.js'
			}),
			new AotPlugin({
				tsConfigPath: path.resolve(__dirname, '../', 'tsconfig.json'),
				entryModule: path.resolve(__dirname, '../', 'src/app/app.module#AppModule'),
				mainPath: path.resolve(__dirname, '../', 'src/main.ts')
			}),

			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true
				},
				comments: false
			})
			
		],

	};
};