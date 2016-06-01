"use strict";

require('./games.less');
const _ = require('lodash');

const appModule = angular.module('games', []);

GamesController.$inject = ['FirebaseService', '$scope'];
function GamesController(FirebaseService, $scope) {

	const addGames = () => {
		let i = 0;
		FirebaseService.addGame(i++, "6.10.2016 22:00", "France", "Romania");

		FirebaseService.addGame(i++, "6.11.2016 16:00", "Albania", "Switzerland");
		FirebaseService.addGame(i++, "6.11.2016 19:00", "Wales", "Slovakia");
		FirebaseService.addGame(i++, "6.11.2016 22:00", "England", "Russia");

		FirebaseService.addGame(i++, "6.12.2016 16:00", "Turkey", "Croatia");
		FirebaseService.addGame(i++, "6.12.2016 19:00", "Poland", "Northern Ireland");
		FirebaseService.addGame(i++, "6.12.2016 22:00", "Germany", "Ukraine");

		FirebaseService.addGame(i++, "6.13.2016 16:00", "Spain", "Czech Republic");
		FirebaseService.addGame(i++, "6.13.2016 19:00", "Republic Of Ireland", "Sweden");
		FirebaseService.addGame(i++, "6.13.2016 22:00", "Belgium", "Italy");

		FirebaseService.addGame(i++, "6.14.2016 19:00", "Austria", "Hungary");
		FirebaseService.addGame(i++, "6.14.2016 22:00", "Portugal", "Iceland");

		FirebaseService.addGame(i++, "6.15.2016 16:00", "Russia", "Slovakia");
		FirebaseService.addGame(i++, "6.15.2016 19:00", "Romania", "Switzerland");
		FirebaseService.addGame(i++, "6.15.2016 22:00", "France", "Albania");

		FirebaseService.addGame(i++, "6.16.2016 16:00", "England", "Wales");
		FirebaseService.addGame(i++, "6.16.2016 19:00", "Ukraine", "Northern Ireland");
		FirebaseService.addGame(i++, "6.16.2016 22:00", "Germany", "Poland");

		FirebaseService.addGame(i++, "6.17.2016 16:00", "Italy", "Sweden");
		FirebaseService.addGame(i++, "6.17.2016 19:00", "Czech Republic", "Croatia");
		FirebaseService.addGame(i++, "6.17.2016 22:00", "Spain", "Turkey");

		FirebaseService.addGame(i++, "6.18.2016 16:00", "Belgium", "Republic Of Ireland");
		FirebaseService.addGame(i++, "6.18.2016 19:00", "Iceland", "Hungary");
		FirebaseService.addGame(i++, "6.18.2016 22:00", "Portugal", "Austria");

		FirebaseService.addGame(i++, "6.19.2016 22:00", "Romania", "Albania");
		FirebaseService.addGame(i++, "6.19.2016 22:00", "Switzerland", "France");

		FirebaseService.addGame(i++, "6.20.2016 22:00", "Russia", "Wales");
		FirebaseService.addGame(i++, "6.20.2016 22:00", "Slovakia", "England");

		FirebaseService.addGame(i++, "6.21.2016 19:00", "Ukraine", "Poland");
		FirebaseService.addGame(i++, "6.21.2016 19:00", "Northern Ireland", "Germany");
		FirebaseService.addGame(i++, "6.21.2016 22:00", "Croatia", "Spain");
		FirebaseService.addGame(i++, "6.21.2016 22:00", "Czech Republic", "Turkey");

		FirebaseService.addGame(i++, "6.22.2016 19:00", "Hungary", "Portugal");
		FirebaseService.addGame(i++, "6.22.2016 19:00", "Iceland", "Austria");
		FirebaseService.addGame(i++, "6.22.2016 22:00", "Italy", "Republic Of Ireland");
		FirebaseService.addGame(i++, "6.22.2016 22:00", "Sweden", "Belgium");

		FirebaseService.addGame(i++, "6.25.2016 16:00");
		FirebaseService.addGame(i++, "6.25.2016 19:00");
		FirebaseService.addGame(i++, "6.25.2016 22:00");

		FirebaseService.addGame(i++, "6.26.2016 16:00");
		FirebaseService.addGame(i++, "6.26.2016 19:00");
		FirebaseService.addGame(i++, "6.26.2016 22:00");

		FirebaseService.addGame(i++, "6.27.2016 19:00");
		FirebaseService.addGame(i++, "6.27.2016 22:00");

		FirebaseService.addGame(i++, "6.30.2016 22:00");
		FirebaseService.addGame(i++, "7.1.2016 22:00");
		FirebaseService.addGame(i++, "7.2.2016 22:00");
		FirebaseService.addGame(i++, "7.3.2016 22:00");
		FirebaseService.addGame(i++, "7.6.2016 22:00");
		FirebaseService.addGame(i++, "7.7.2016 22:00");
		FirebaseService.addGame(i++, "7.10.2016 22:00");
	};

	//addGames();

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

	FirebaseService.getGames().then(games => {

		const g = games.map(game => {
			return {
				id: game.id,
				teamOne: game.teamOne,
				teamTwo: game.teamTwo,
				time: game.time,
				winnerModel: game.winner,
				teamOneGoalsModel: game.teamOneGoals,
				teamTwoGoalsModel: game.teamTwoGoals,
				goalDifferenceModel: game.goalDifference,
				firstToScoreModel: game.firstToScore,
				winnersOptions: [
					{id: 'draw', value: 'draw'},
					{id: game.teamOne, value: game.teamOne},
					{id: game.teamTwo, value: game.teamTwo}
				],
				firstToScoreOptions: [
					{id: 'none', value: 'none'},
					{id: game.teamOne, value: game.teamOne},
					{id: game.teamTwo, value: game.teamTwo}
				]
			};
		});


		this.gamesIndex = g.reduce((obj, game) => {
			obj[game.id] = false;
			return obj;
		}, {});

		$scope.$apply(() => this.games = g);
	});


	this.onApply = (currGame) => {

		if (angular.isUndefined(currGame.winnerModel) ||
			angular.isUndefined(currGame.teamOneGoalsModel) ||
				angular.isUndefined(currGame.teamTwoGoalsModel) ||
					angular.isUndefined(currGame.goalDifferenceModel) ||
						angular.isUndefined(currGame.firstToScoreModel)) {

			alert("You mut fill all the game results!");
			return;
		}

		const saveGameResults = (game, cb) => FirebaseService.updateGame(game, cb);
		const getGame = (id) => FirebaseService.getGame(id);
		const getUsers = () => FirebaseService.getUsers();
		const updateUser = (user) => FirebaseService.updateUser(user);

		const updateUsersScores = (game, cb) => {

			getUsers().then(users => {

				_.values(users).forEach(user => {
					let score = 0;
					const userGame = user.gamesPredictions[game.id];

					if (userGame.winner === game.winner) {
						score += 2;
					}

					if (userGame.teamOneGoals === game.teamOneGoals) {
						score += 2;
					}

					if (userGame.teamTwoGoals === game.teamTwoGoals) {
						score += 2;
					}

					if (userGame.goalDifference === game.goalDifference) {
						score += 2;
					}

					if (userGame.firstToScore === game.firstToScore) {
						score += 2;
					}

					user.prevRank = user.currRank;
					user.currRank = user.currRank + score;
					userGame.totalScore = score;

					updateUser(user);
				});

				cb();
			});
		};

		getGame(currGame.id).then(gameDb => {
			gameDb.winner = currGame.winnerModel;
			gameDb.teamOneGoals = currGame.teamOneGoalsModel;
			gameDb.teamTwoGoals = currGame.teamTwoGoalsModel;
			gameDb.goalDifference = currGame.goalDifferenceModel;
			gameDb.firstToScore = currGame.firstToScoreModel;

			saveGameResults(gameDb, () => {

				updateUsersScores(gameDb, () => this.gamesIndex[gameDb.id] = false);
			});
		});
	};

	this.onChange = (index) => this.gamesIndex[index] = true;
}

appModule.component('games', {
	controllerAs: 'gamesCtrl',
	controller: GamesController,
	template: require('./games.html')
});

module.exports = appModule.name;