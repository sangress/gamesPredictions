"use strict";

require('./usersPredicts.less');


const appModule = angular.module('usersPredicts', []);

UsersPredictsController.$inject = [];
function UsersPredictsController() {

}

appModule.component('usersPredicts', {
	bindings: {

	},
	controllerAs: 'usersPredictsCtrl',
	controller: UsersPredictsController,
	template: require('./usersPredicts.html')
});

module.exports = appModule.name;