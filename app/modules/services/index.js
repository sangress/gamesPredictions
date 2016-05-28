"use strict";

module.exports = angular.module('services', [
	require('./firebaseService'),
	require('./facebookService'),
	require('./loginService')
]);