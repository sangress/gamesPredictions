"use strict";

require('./gamesResults.less');


const appModule = angular.module('gamesResults', []);

GamesResultsController.$inject = [];
function GamesResultsController() {

}

appModule.component('gamesResults', {
	bindings: {
		games: "="
	},
	controllerAs: 'gamesResultsCtrl',
	controller: GamesResultsController,
	template: require('./gamesResults.html')
});

module.exports = appModule.name;