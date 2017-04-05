const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {

    return {
		devtool: false,
		
		plugins: [
            new webpack.optimize.CommonsChunkPlugin({
				name: ['dist/app', 'dist/vendor', 'dist/polyfills', 'dist/styles']
			}),

			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true
				},
				comments: false
			})
		]
	};
};