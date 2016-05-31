"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = ['userDetails', 'FacebookService', '$scope', '$state', '$timeout'];
function HomepageController(userDetails, FacebookService, $scope, $state, $timeout) {

	this.user = userDetails;
	this.selectedPage = "qulificationPrediction";
	this.tabClicked = (id) => this.selectedPage = id;

	this.userPredictionsClicked = (id) => {
		this.defaultUserId = id;
		this.tabClicked('usersPredicts');
	};

	this.tabs = [
		{id: 'myPage', name: 'My Page'},
		{id: 'qulificationPrediction', name: 'Qulification Prediction'},
		{id: 'gamesPredictions', name: 'Games Predictions'},
		{id: 'leaderBoard', name: 'Leader Board'},
		{id: 'usersPredicts', name: 'Users Predicts'}
	];

	FacebookService.getPicture(this.user.id,
		(response) => {
			$scope.$apply(()=> this.pictureUrl = response.data.url);
		});

	this.logout = () => {
		FacebookService.logout( (response) => {
			$timeout(() => $state.go('login', {}, {
				location: 'replace',
				reload: true
			}));
		});
	};
}

getLoginStatus.$inject = ['$state', '$q', '$timeout', 'FacebookService'];
function getLoginStatus ($state, $q, $timeout, FacebookService) {
	const deferred = $q.defer();

	FacebookService.getLoginStatus(response => {
		if (response.authResponse) {
			return deferred.resolve(response.authResponse.userID);
		}

		$timeout(() => $state.go('login', {}, {
			location: 'replace',
			reload: true
		}));

		return deferred.reject();
	});

	return deferred.promise;
}

getUserDetails.$inject = ['fbUserId', 'FirebaseService'];
function getUserDetails (fbUserId, FirebaseService) {
	return FirebaseService.getUser(fbUserId);
}

addNewUser.$inject = ['fbUserId', 'FirebaseService'];
function addNewUser (fbUserId, FirebaseService) {
	return FirebaseService.getUser(fbUserId);
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
					fbUserId: getLoginStatus,
					userDetails: getUserDetails
				}
			});

	}]);

module.exports = appModule.name;