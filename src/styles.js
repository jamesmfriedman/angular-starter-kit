//explicit set of loaders, we want to inline the base styles
require('!style-loader!css-loader?sourceMap!postcss-loader?config=./config/postcss.config.js!sass-loader!./styles/main.scss');