"use strict";

require('./gamesPredictions.less');


const appModule = angular.module('gamesPredictions', []);

GamesPredictionsController.$inject = ['FirebaseService', '$scope'];
function GamesPredictionsController(FirebaseService, $scope) {

	this.onApplyChanges = (game) =>
		FirebaseService.updateUserGame("10153471103786104", game.id, game,
			() => $scope.$broadcast(game.id + '-update-completed'));
}

appModule.component('gamesPredictions', {
	bindings: {
		games: "=userGamesPredictions"
	},
	controllerAs: 'gamesPredictionsCtrl',
	controller: GamesPredictionsController,
	template: require('./gamesPredictions.html')
});

module.exports = appModule.name;