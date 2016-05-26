"use strict";

require('./gamesResults.less');


const appModule = angular.module('gamesResults', []);

GamesResultsController.$inject = [];
function GamesResultsController() {

	this.games = [
		{
			id: 0,
			teamOne: "moshe",
			teamTwo: "moshe",
			time: "dskjk",
			winner: "dfsmn",
			teamOneGoals: 2,
			teamTwoGoals: 3,
			goalsDifference: 1,
			firstToScore: "dj",
			total: 5
		},
		{
			id: 1,
			teamOne: "moshe",
			teamTwo: "moshe",
			time: "dskjk",
			winner: "dfsmn",
			teamOneGoals: 2,
			teamTwoGoals: 3,
			goalsDifference: 1,
			firstToScore: "dj",
			total: 5
		},
		{
			id: 2,
			teamOne: "moshe",
			teamTwo: "moshe",
			time: "dskjk",
			winner: "dfsmn",
			teamOneGoals: 2,
			teamTwoGoals: 3,
			goalsDifference: 1,
			firstToScore: "dj",
			total: 5
		},
		{
			id: 3,
			teamOne: "moshe",
			teamTwo: "moshe",
			time: "dskjk",
			winner: "dfsmn",
			teamOneGoals: 2,
			teamTwoGoals: 3,
			goalsDifference: 1,
			firstToScore: "dj",
			total: 5
		},
		{
			id: 4,
			teamOne: "moshe",
			teamTwo: "moshe",
			time: "dskjk",
			winner: "dfsmn",
			teamOneGoals: 2,
			teamTwoGoals: 3,
			goalsDifference: 1,
			firstToScore: "dj",
			total: 5
		},
		{
			id: 5,
			teamOne: "moshe",
			teamTwo: "moshe",
			time: "dskjk",
			winner: "dfsmn",
			teamOneGoals: 2,
			teamTwoGoals: 3,
			goalsDifference: 1,
			firstToScore: "dj",
			total: 5
		}
	];
}

appModule.component('gamesResults', {
	bindings: {
		userId: "@"
	},
	controllerAs: 'gamesResultsCtrl',
	controller: GamesResultsController,
	template: require('./gamesResults.html')
});

module.exports = appModule.name;