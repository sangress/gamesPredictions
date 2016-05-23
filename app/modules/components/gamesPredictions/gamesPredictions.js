"use strict";

require('./gamesPredictions.less');


const appModule = angular.module('gamesPredictions', []);

GamesPredictionsController.$inject = [];
function GamesPredictionsController() {

}

appModule.component('gamesPredictions', {
	bindings: {

	},
	controllerAs: 'gamesPredictionsCtrl',
	controller: GamesPredictionsController,
	template: require('./gamesPredictions.html')
});

module.exports = appModule.name;