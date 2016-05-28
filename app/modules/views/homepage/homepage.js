"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = [];
function HomepageController() {

	this.selectedPage = "myPage";
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

getLoginStatus.$inject = ['loginService', '$state', '$q', '$timeout'];
function getLoginStatus (loginService, $state, $q, $timeout) {

	if (loginService.isLoggedin()) {
		return $q.resolve();
	}

	$timeout(() => $state.go('login', {}, {
		location: 'replace',
		reload: true
	}));

	return $q.reject();
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('homepage', {
				url: '/homepage',
				template: require('./homepage.html'),
				controller: HomepageController,
				controllerAs: 'homepageCtrl',
				resolve: {
					loginStatus: getLoginStatus
				}
			});
		//$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;