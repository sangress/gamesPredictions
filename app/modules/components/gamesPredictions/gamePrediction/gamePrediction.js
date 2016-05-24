"use strict";

require('./gamePrediction.less');


const appModule = angular.module('gamePrediction', []);

GamePredictionController.$inject = [];
function GamePredictionController() {

	//this.team1 = "Israel";
	//team2 = ""
	//time
	//winnersOptions

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

	this.totalOptions = [
		{id: 0, value: '0'},
		{id: 2, value: '2'},
		{id: 4, value: '4'},
		{id: 6, value: '6'},
		{id: 8, value: '8'},
		{id: 9, value: '10'}
	];

	this.teamOne = this.game.teamOne.value;
	this.teamTwo = this.game.teamTwo.value;
	this.time = this.game.time;
	this.winnersOptions = [{id: 0, value: 'draw'}, this.game.teamOne, this.game.teamTwo];
	this.firstToScoreOptions = [{id: 0, value: 'none'}, this.game.teamOne, this.game.teamTwo];
}

appModule.component('gamePrediction', {
	bindings: {
		game: "="
	},
	controllerAs: 'gamePredictionCtrl',
	controller: GamePredictionController,
	template: require('./gamePrediction.html')
});

module.exports = appModule.name;