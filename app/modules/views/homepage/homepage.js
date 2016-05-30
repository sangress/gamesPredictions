"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = ['user', 'FacebookService', '$scope'];
function HomepageController(user, FacebookService, $scope) {

	this.user = user;
	this.selectedPage = "myPage";
	this.tabClicked = (id) => this.selectedPage = id;

	this.userPredictionsClicked = (id) => this.tabClicked('usersPredicts');

	this.tabs = [
		{id: 'myPage', name: 'My Page'},
		{id: 'qulificationPrediction', name: 'Qulification Prediction'},
		{id: 'gamesPredictions', name: 'Games Predictions'},
		{id: 'leaderBoard', name: 'Leader Board'},
		{id: 'usersPredicts', name: 'Users Predicts'}
	];

	this.pictureUrl = "cd";


	console.log(user);


	//FacebookService.me( (rs) => console.log(rs));



	FacebookService.getPicture(user.id,
		(response) => {
			console.log(response);
			$scope.$apply(()=> this.pictureUrl = response.data.url);
		});
}

getLoginStatus.$inject = ['loginService', '$state', '$q', '$timeout', 'FirebaseService', 'FacebookService'];
function getLoginStatus (loginService, $state, $q, $timeout, FirebaseService, FacebookService) {

	if (loginService.isLoggedIn()) {

		console.log("gfd");
		FacebookService.getLoginStatus( (rs) => console.log(rs));
		//FirebaseService.getAuthResponse(results => console.log(results)); //.then(results => console.log(results));

		console.log("gfd--2");
		return FirebaseService.getUser(loginService.getUserId());
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
					user: getLoginStatus
				}
			});
		//$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;