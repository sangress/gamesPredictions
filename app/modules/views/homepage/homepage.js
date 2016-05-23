"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = [];
function HomepageController() {

	this.selectedPage = "myPage";
	this.tabClicked = (id) => this.selectedPage = id;

	this.tabs = [
		{id: 'myPage', name: 'my page'},
		{id: 'gamesPredictions', name: 'games predictions'},
		{id: 'topPredicts', name: 'top predicts'}
	];
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('homepage', {
				url: '/',
				template: require('./homepage.html'),
				controller: HomepageController,
				controllerAs: 'homepageCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;