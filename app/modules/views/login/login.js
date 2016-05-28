"use strict";

require('./login.less');

const appModule = angular.module('login', []);

LoginController.$inject = ['FacebookService', 'loginStatus', '$state', 'loginService'];
function LoginController(FacebookService, loginStatus, $state, loginService) {

	this.onLogin = () => {
		FacebookService.login({scope: 'email,public_profile'},
			(response) => {
				if (response.authResponse) {
					console.log('Welcome!  Fetching your information.... ');
					loginService.setLoggedStatus(true);
					$state.go('homepage', {}, {
						location: 'replace',
						reload: true
					});

					//FB.api('/me', function(response) {
					//	console.log('Good to see you, ' + response.name + '.');
					//});
				} else {
					console.log('User cancelled login or did not fully authorize.');
				}

				//console.log(response);
				//this.status = response.status;
			});
	};

	this.onLogout = () => FacebookService.logout();

	this.status = loginStatus;



	// fb status: 'unknown', 'connected'

	//login(function(response) {
	//	if (response.authResponse) {
	//		console.log('Welcome!  Fetching your information.... ');
	//		FB.api('/me', function(response) {
	//			console.log('Good to see you, ' + response.name + '.');
	//		});
	//	} else {
	//		console.log('User cancelled login or did not fully authorize.');
	//	}
	//});

}

getFacebookStatus.$inject = ['FacebookService', '$q'];
function getFacebookStatus (FacebookService, $q) {

	const deferred = $q.defer();
	FacebookService.getLoginStatus( (response) =>{
		console.log(response);
		deferred.resolve(response.status);
	});

	return deferred.promise;
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/',
				template: require('./login.html'),
				controller: LoginController,
				controllerAs: 'loginCtrl',
				resolve: {
					loginStatus: getFacebookStatus
				}
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;