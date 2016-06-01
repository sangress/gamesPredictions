"use strict";

require('./usersPredicts.less');
const _ = require('lodash');

const appModule = angular.module('usersPredicts', [
	require('./gamesResults/gamesResults')
]);

UsersPredictsController.$inject = ['FirebaseService', '$scope', 'usersPredictsService'];
function UsersPredictsController(FirebaseService, $scope, usersPredictsService) {

	FirebaseService.getUsers().then(results => {
		const users = _.values(results).map(user => ({id: user.id, value: user.name}));
		$scope.$apply(()=> this.users = users);
	});

	this.onSelectedUser = () => FirebaseService.getUser(this.userSelected)
		.then(user =>$scope.$apply(()=> this.userDetails = usersPredictsService.getUserDetails(user)));

	this.userSelected && this.onSelectedUser();
}

appModule.component('usersPredicts', {
	bindings: {
		userSelected: "@defaultUserId"
	},
	controllerAs: 'usersPredictsCtrl',
	controller: UsersPredictsController,
	template: require('./usersPredicts.html')
});

appModule.factory('usersPredictsService', require('./usersPredictsService'));

module.exports = appModule.name;