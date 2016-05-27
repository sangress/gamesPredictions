"use strict";

require('./admin.less');

const appModule = angular.module('admin', []);

AdminController.$inject = ['FirebaseService'];
function AdminController(FirebaseService) {

	this.selectedPage = "games";
	this.tabClicked = (id) => this.selectedPage = id;

	this.tabs = [
		{id: 'countries', name: 'Countries'},
		{id: 'games', name: 'Games'}
	];
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('admin', {
				url: '/admin',
				template: require('./admin.html'),
				controller: AdminController,
				controllerAs: 'adminCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;