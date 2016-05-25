"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = [];
function HomepageController() {

	this.selectedPage = "gamesPredictions";
	this.tabClicked = (id) => this.selectedPage = id;

	this.userPredictionsClicked = (id) => {
		console.log(id);
		this.tabClicked('usersPredicts');
	};


	this.tabs = [
		{id: 'myPage', name: 'My Page'},
		{id: 'qulificationPrediction', name: 'Qulification Prediction'},
		{id: 'gamesPredictions', name: 'Games Predictions'},
		{id: 'leaderBoard', name: 'Leader Board'},
		{id: 'usersPredicts', name: 'Users Predicts'}
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