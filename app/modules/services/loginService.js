'use strict';

const appModule = angular.module('loginService', []);

appModule.factory('loginService', () => {

	let userLoggedin = false;

	const isLoggedin = () => (userLoggedin);
	const setLoggedStatus = (status) => (userLoggedin = status);

	// The public API interface
	return {
		isLoggedin,
		setLoggedStatus
	};

});


module.exports = appModule.name;