const webpack = require('webpack');

const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
	entry: __dirname+'/src/App.js',
	mode: 'production',
	output: {
		path: __dirname+'/public/js',
		filename: 'bundle.js'
	},
	watch: true,
	target: 'node',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							['@babel/preset-react'],
							['@babel/preset-env'],
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},

			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},

			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'imgs/'
				}

			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},


		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		fallback: {
			"child_process": 'empty',
			"fs": require.resolve("browserify-fs"),
			"util": require.resolve("util"),
			"http": require.resolve("stream-http"),
			"https": require.resolve("https-browserify"),
			"tls": require.resolve("tls-browserify"),
			"net": require.resolve("net-browserify"),
			"crypto": require.resolve("crypto-browserify"),
			"path": require.resolve("path-browserify"),
			"os": require.resolve("os-browserify"),
			"stream": require.resolve("stream-browserify"),
			"zlib": require.resolve("browserify-zlib"),
			"constants": require.resolve("constants-browserify")
		}
	},
	externals : {
		canvas: {},
		express: "require(\"express\")",
		},
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, "public"),
		historyApiFallback: { index: __dirname+'/public/' , disableDotRule: true },
	},
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react",
		}),
	],

}