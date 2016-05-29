"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = ['user', 'FacebookService', '$scope'];
function HomepageController(user, FacebookService, $scope) {

	this.user = user;
	this.selectedPage = "gamesPredictions";
	this.tabClicked = (id) => this.selectedPage = id;

	this.userPredictionsClicked = (id) => this.tabClicked('usersPredicts');

	this.tabs = [
		{id: 'myPage', name: 'My Page'},
		{id: 'qulificationPrediction', name: 'Qulification Prediction'},
		{id: 'gamesPredictions', name: 'Games Predictions'},
		{id: 'leaderBoard', name: 'Leader Board'},
		{id: 'usersPredicts', name: 'Users Predicts'}
	];

	//this.pictureUrl = "cd";
	//FacebookService.getPicture(this.user.id,
	//	(response) => {
	//		$scope.$apply(()=> this.pictureUrl = response.data.url);
	//	});
}

getLoginStatus.$inject = ['loginService', '$state', '$q', '$timeout', 'FirebaseService'];
function getLoginStatus (loginService, $state, $q, $timeout, FirebaseService) {

	return FirebaseService.getUser('10153471103786104');

	//if (loginService.isLoggedIn()) {
	//	return loginService.getUser();
	//}
    //
	//$timeout(() => $state.go('login', {}, {
	//	location: 'replace',
	//	reload: true
	//}));
    //
	//return $q.reject();
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
					user: getLoginStatus
				}
			});
		//$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;