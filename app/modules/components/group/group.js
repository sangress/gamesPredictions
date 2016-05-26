"use strict";

require('./group.less');


const appModule = angular.module('group', []);

GroupController.$inject = [];
function GroupController() {

}

appModule.component('group', {
	bindings: {
		countries: "=",
		totalScore: "="
	},
	controllerAs: 'groupCtrl',
	controller: GroupController,
	template: require('./group.html')
});

module.exports = appModule.name;