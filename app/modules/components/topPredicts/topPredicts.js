"use strict";

require('./topPredicts.less');


const appModule = angular.module('topPredicts', []);

TopPredictsController.$inject = [];
function TopPredictsController() {

}

appModule.component('topPredicts', {
	bindings: {

	},
	controllerAs: 'topPredictsCtrl',
	controller: TopPredictsController,
	template: require('./topPredicts.html')
});

module.exports = appModule.name;