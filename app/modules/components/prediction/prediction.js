"use strict";

require('./prediction.less');


const appModule = angular.module('prediction', []);

PredictionController.$inject = ['$scope'];
function PredictionController($scope) {

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


	this.onApply = () => {
		const game = angular.copy(this.game);
		game.winner = this.winnerModel || null;
		game.teamOneGoals = this.teamOneGoalsModel || null;
		game.teamTwoGoals = this.teamTwoGoalsModel || null;
		game.goalDifference = this.goalDifferenceModel || null;
		game.firstToScore = this.firstToScoreModel || null;
		this.ngModel.$setViewValue(game);

		const watch = $scope.$on(game.id + '-update-completed', () => {
			$scope.$apply( () => {
				this.modelChanged = false;
				watch();
			});
		});
	};

	const render = () => {
		this.game = this.ngModel.$viewValue;
		this.winnersOptions = [
			{id: 0, value: 'draw'},
			{id: this.game.teamOne, value: this.game.teamOne},
			{id: this.game.teamTwo, value: this.game.teamTwo}
		];

		this.firstToScoreOptions = [
			{id: 0, value: 'none'},
			{id: this.game.teamOne, value: this.game.teamOne},
			{id: this.game.teamTwo, value: this.game.teamTwo}
		];

		this.winnerModel = this.game.winner;
		this.teamOneGoalsModel = this.game.teamOneGoals;
		this.teamTwoGoalsModel = this.game.teamTwoGoals;
		this.goalDifferenceModel = this.game.goalDifference;
		this.firstToScoreModel = this.game.firstToScore;
	};

	this.$onInit = () =>
		this.ngModel.$render = render;

	this.onChange = () => {
		const game = this.ngModel.$viewValue;

		if (game.winner !== this.winnerModel ||
		game.teamOneGoals !== this.teamOneGoalsModel ||
		game.teamTwoGoals !== this.teamTwoGoalsModel ||
		game.goalDifference !== this.goalDifferenceModel ||
		game.firstToScore !== this.firstToScoreModel) {
			this.modelChanged = true;
			return;
		}

		this.modelChanged = false;
	};
}

appModule.component('prediction', {
	bindings: {
		columnClass: "@"
	},
	require: {ngModel: 'ngModel'},
	controllerAs: 'predictionCtrl',
	controller: PredictionController,
	template: require('./prediction.html')
});

module.exports = appModule.name;