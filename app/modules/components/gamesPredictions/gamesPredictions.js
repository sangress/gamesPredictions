"use strict";

require('./gamesPredictions.less');


const appModule = angular.module('gamesPredictions', []);

GamesPredictionsController.$inject = [];
function GamesPredictionsController() {

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

	this.games = this.userGamesPredictions.map(game => {
		return {
			id: game.id,
			teamOne: game.teamOne,
			teamTwo: game.teamTwo,
			time: game.time,
			winnersOptions: [{id: 0, value: 'draw'}, {id: game.teamOne, value: game.teamOne}, {id: game.teamTwo, value: game.teamTwo}],
			firstToScoreOptions: [{id: 0, value: 'none'}, {id: game.teamOne, value: game.teamOne}, {id: game.teamTwo, value: game.teamTwo}]
		};
	});
}

appModule.component('gamesPredictions', {
	bindings: {
		userGamesPredictions: "="
	},
	controllerAs: 'gamesPredictionsCtrl',
	controller: GamesPredictionsController,
	template: require('./gamesPredictions.html')
});

module.exports = appModule.name;