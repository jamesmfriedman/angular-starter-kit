module.exports = function(env) {
    return {
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: ['@angularclass/hmr-loader', 'awesome-typescript-loader', 'angular2-template-loader'].join('!')
                }
            ]
        },
        devtool: 'cheap-module-eval-source-map',
		devServer: {
			apiHistoryFallback: true,
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
};