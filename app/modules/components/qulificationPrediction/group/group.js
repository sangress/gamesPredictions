"use strict";

require('./group.less');


const appModule = angular.module('group', []);

GroupController.$inject = [];
function GroupController() {

	this.countriesOptions = this.countries.map(country => ({id: country, value: country}));
}

appModule.component('group', {
	bindings: {
		countries: "=",
		totalScore: "=",
		groupName: "@"
	},
	controllerAs: 'groupCtrl',
	controller: GroupController,
	template: require('./group.html')
});

module.exports = appModule.name;