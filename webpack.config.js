'use strict';

const DEV_SERVER_PORT = 8082;
const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const pkg = require('./package.json');
const argv = require('yargs').argv;

const exclude = /node_modules|browser_modules/;

const libs = Object.keys(pkg.dependencies)
	.filter((dep) => dep !== 'bootstrap' && dep !== 'angular-ui-bootstrap')
	.concat(Object.keys(pkg.browser));

const production = !!argv.p;
const sourceMap = production ? '' : '?sourceMap';


//{
//	test: /\.css$/,
//	loader: "style!css?sourceMap"
//},
//{
//	test: /\.less$/,
//	loader: "style!css?sourceMap!less?sourceMap"
//},


const config = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './index.js',
		libs: libs
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	module: {
		preLoaders: [
			{test: /\.js$/, loader: "eslint-loader", exclude: exclude }
		],
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: exclude
			},
			{
				test: /\.css$/,
				loader: production ? ExtractTextPlugin.extract('style', ['css']) : `style!css?sourceMap`
			},
			{
				test: /\.less$/,
				loader: production ? ExtractTextPlugin.extract('style', ['css','less']) : `style!css${sourceMap}!less${sourceMap}`
			},
			{
				test: /\.(png|jpe?g)$/,
				loader: 'url'
			},
			{
				test: /\.html$/,
				loader: "html"
			},
			{ test: /select\.min\.js$/, loader: "exports?angular.module('ui.select').name" }
		]
	},
	resolve: {
		root: path.join(__dirname, 'app'),
		extensions: ['', '.js']// you can now require('file') instead of require('file.js')
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("libs", "libs.js"),
		new CleanPlugin(['build']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	],
	devServer: {
		port: DEV_SERVER_PORT,
		contentBase: './app',
		colors: true,
		noInfo: true,
		historyApiFallback: true
	}
};

if(!production) {
	config.devtool = '#cheap-module-source-map';

	config.plugins = config.plugins.concat([
		new WebpackNotifierPlugin({alwaysNotify: true})
	]);
}

if(production) {
	config.plugins = config.plugins.concat([
		new ExtractTextPlugin("./app.css"),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				screw_ie8: true,
				warnings: false
			}
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
				discardComments: { removeAll: true },
				discardUnused: false,
				zindex: false,
				autoprefixer: { browsers: ['last 2 Chrome versions', 'last 2 Firefox versions', 'last 2 Safari versions'] }
			},
			canPrint: true
		})
	]);
}

module.exports = config;