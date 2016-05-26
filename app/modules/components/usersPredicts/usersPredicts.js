"use strict";

require('./usersPredicts.less');
const _ = require('lodash');

const appModule = angular.module('usersPredicts', [
	require('./gamesResults/gamesResults')
]);

UsersPredictsController.$inject = ['UsersService'];
function UsersPredictsController(UsersService) {

	this.users = UsersService.getUsers().map(user => ({id: user.id, value: user.name}));

	this.championsValues = [
		{title: 'Champion:', value: "England"},
		{title: 'Runner Up:', value: "England"},
		{title: 'Group 1 winner:', value: "England"},
		{title: 'Group 1 runner up:', value: "England"},
		{title: 'Group 2 winner:', value: "England"},
		{title: 'Group 2 runner up:', value: "England"},
		{title: 'Group 3 winner:', value: "England"},
		{title: 'Group 3 runner up:', value: "England"},
		{title: 'Group 4 winner:', value: "England"},
		{title: 'Group 4 runner up:', value: "England"}
	];

	this.onSelectedUser = () => {
		const user = _.find(this.users,(user) => user.id === this.userSelected);
		this.userName = user.value;
	};


	//this.games = [
	//	{ }
	//];
}

appModule.component('usersPredicts', {
	bindings: {

	},
	controllerAs: 'usersPredictsCtrl',
	controller: UsersPredictsController,
	template: require('./usersPredicts.html')
});

module.exports = appModule.name;