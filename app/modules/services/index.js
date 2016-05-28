"use strict";

module.exports = angular.module('services', [
	require('./usersService'),
	require('./countriesService'),
	require('./gamesService'),
	require('./firebaseService'),
	require('./facebookService')
]);