'use strict';

const DEV_SERVER_PORT = 8082;
const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');
const pkg = require('./package.json');

const exclude = /node_modules|browser_modules/;

const libs = Object.keys(pkg.dependencies)
	.filter((dep) => dep !== 'bootstrap' && dep !== 'angular-ui-bootstrap')
	.concat(Object.keys(pkg.browser));

module.exports = {
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
				loader: "style!css?sourceMap"
			},
			{
				test: /\.less$/,
				loader: "style!css?sourceMap!less?sourceMap"
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=80192&name=[name].[ext]'
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
	devtool: 'source-map',
	plugins: [
		new WebpackNotifierPlugin({alwaysNotify: true}),
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