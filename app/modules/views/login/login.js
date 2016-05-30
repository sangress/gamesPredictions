"use strict";

require('./login.less');

const appModule = angular.module('login', []);

LoginController.$inject = ['FacebookService', 'loginStatus', '$state', 'loginService', 'FirebaseService', 'userService'];
function LoginController(FacebookService, loginStatus, $state, loginService, FirebaseService, userService) {


	//userService.getNewUserDetails();


	this.onLogin = () => {
		FacebookService.login({scope: 'email, public_profile'},
			(response) => {
				if (response.authResponse) {
					FacebookService.me((response) => {
						FirebaseService.getUser(response.id).then(user => {

							if (user !== null) {
								loginService.setUser(user);
								$state.go('homepage', {}, {
									location: 'replace',
									reload: true
								});

								return;
							}

							userService.getNewUserDetails(response.id, response.name, response.email)
								.then(user => {
									FirebaseService.addUser(user);
									loginService.setUser(user);
									$state.go('homepage', {}, {
										location: 'replace',
										reload: true
									});
								});

						});
					});
				} else {
					console.log('User cancelled login or did not fully authorize.');
				}
			});
	};
}

getFacebookStatus.$inject = ['FacebookService', '$q', '$timeout', '$state'];
function getFacebookStatus (FacebookService, $q, $timeout, $state) {
	const deferred = $q.defer();

	FacebookService.getLoginStatus( (response) => {
		if (response.authResponse) {
			$timeout(() => $state.go('homepage', {}, {
				location: 'replace',
				reload: true
			}));

			return deferred.reject();
		}

		return deferred.resolve();
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