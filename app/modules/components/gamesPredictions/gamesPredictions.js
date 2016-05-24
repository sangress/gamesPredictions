"use strict";

require('./gamesPredictions.less');


const appModule = angular.module('gamesPredictions', [
	require('./gamePrediction/gamePrediction')
]);

GamesPredictionsController.$inject = [];
function GamesPredictionsController() {

	this.game = {
		teamOne: {id: "Moshe", value: "Moshe"},
		teamTwo: {id: "Israel", value: "Israel"},
		time: "2016-05-27 08:25:41"
	};
}

appModule.component('gamesPredictions', {
	bindings: {

	},
	controllerAs: 'gamesPredictionsCtrl',
	controller: GamesPredictionsController,
	template: require('./gamesPredictions.html')
});

module.exports = appModule.name;