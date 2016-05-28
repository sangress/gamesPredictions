'use strict';

const appModule = angular.module('loginService', []);

appModule.factory('loginService', () => {

	let _user = null;

	const isLoggedIn = () => (_user !== null);
	const setUser = (user) => (_user = user);
	const getUser = () => (_user);
	// The public API interface
	return {
		isLoggedIn,
		setUser,
		getUser
	};

});


module.exports = appModule.name;