'use strict';

const appModule = angular.module('loginService', []);

appModule.factory('loginService', ['$window', ($window) => {

	//let _user = null;

	const isLoggedIn = () => {
		console.log($window.sessionStorage.userId);
		return (angular.isDefined($window.sessionStorage.userId) && $window.sessionStorage.userId !== null);
	};

	const setUser = (user) => {
		//_user = user;
		$window.sessionStorage.userId = user.id;
	};

	const getUserId = () => ($window.sessionStorage.userId);
	// The public API interface
	return {
		isLoggedIn,
		setUser,
		getUserId
	};

}]);


module.exports = appModule.name;