"use strict";

require('./gamesPredictions.less');


const appModule = angular.module('gamesPredictions', [
	require('./gamePrediction/gamePrediction')
]);

GamesPredictionsController.$inject = ['GamesService'];
function GamesPredictionsController(GamesService) {

	const teamGoalsOptions = [
		{id: 0, value: '0'},
		{id: 1, value: '1'},
		{id: 2, value: '2'},
		{id: 3, value: '3'},
		{id: 4, value: '4'},
		{id: 5, value: '5'},
		{id: 6, value: '6'},
		{id: 7, value: '7'},
		{id: 8, value: '8'},
		{id: 9, value: '9'}
	];

	this.teamOneGoalsOptions = teamGoalsOptions;
	this.teamTwoGoalsOptions = teamGoalsOptions;
	this.goalDifferenceOptions = teamGoalsOptions;

	this.games = GamesService.getGames().map(game => {
		return {
			id: game.id,
			teamOne: game.teamOne.value,
			teamTwo: game.teamTwo.value,
			time: game.time,
			winnersOptions: [{id: 0, value: 'draw'}, game.teamOne, game.teamTwo],

			firstToScoreOptions: [{id: 0, value: 'none'}, game.teamOne, game.teamTwo]
		};
	});
}

appModule.component('gamesPredictions', {
	bindings: {

	},
	controllerAs: 'gamesPredictionsCtrl',
	controller: GamesPredictionsController,
	template: require('./gamesPredictions.html')
});

module.exports = appModule.name;