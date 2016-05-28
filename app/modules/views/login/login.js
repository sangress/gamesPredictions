"use strict";

require('./login.less');

const appModule = angular.module('login', []);

HomepageController.$inject = [];
function HomepageController() {

	this.onLogin = () => {
		console.log("fdsf");
	};

}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				template: require('./login.html'),
				controller: HomepageController,
				controllerAs: 'loginCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;