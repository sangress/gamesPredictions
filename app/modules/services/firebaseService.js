'use strict';

const appModule = angular.module('FirebaseService', []);

appModule.factory('FirebaseService', ['firebase', (firebase) => {


	const fbDb = firebase.database();
	const resultsFun = (resuls) => resuls.val();

	//const getGame = (gameId) => fbDb.ref('/games/' + gameId).once('value').then(resultsFun);

	// Countries
	const getCountries = () => fbDb.ref('/countries/').once('value').then(resultsFun);
	const setCountries = (countries, onComplete) => fbDb.ref('/countries').set(countries, onComplete);

	// Groups
	const getGroups = () => fbDb.ref('/groups/').once('value').then(resultsFun);
	const setGroups = (groups, onComplete) => fbDb.ref('/groups').set(groups, onComplete);

	// Games
	const getGames = () => fbDb.ref('/games/').once('value').then(resultsFun);
	const getGame = (id) => fbDb.ref('/games/' + id).once('value').then(resultsFun);
	const updateGame = (game, onComplete) => fbDb.ref('/games/' + game.id).set(game, onComplete);
	const addGame = (id, time, team1 = null, team2 = null) => {
		const game = {
			id: id,
			teamOne: team1,
			teamTwo: team2,
			time: (new Date(time)).getTime(),
			isActive: team1 !== null && team2 !== null,
			winner: null,
			teamOneGoals: 0,
			teamTwoGoals: 0,
			goalDifference: 0,
			firstToScore: null
		};
		fbDb.ref('games/' + id).set(game);
	};

	// Users
	const getUsers = () => fbDb.ref('/users/').once('value').then(resultsFun);
	const getUser = (id) => fbDb.ref('/users/' + id).once('value').then(resultsFun);
	const isUserExist = (id) => fbDb.ref('/users/' + id).once('value').then((resuls) => resuls.val() !== null);
	const addUser = (user, onComplete) => fbDb.ref('users/' + user.id).set(user, onComplete);

	// user-games
	const userRef = (userId) => fbDb.ref(`/users/${userId}`);
	const updateUser = (userDetails, onComplete) =>
			userRef(userDetails.id).set(userDetails, onComplete);
	const getUserGame = (userId, gameId) =>
		userRef(userId).child(`/gamesPredictions/${gameId}`).once('value').then(resultsFun);
	const updateUserGame = (userId, gameId, game, onComplete) =>
		userRef(userId).child(`/gamesPredictions/${gameId}`).set(game, onComplete);

	const updateUserQulification = (userId, propId, data, onComplete) =>
		userRef(userId).child(`/qulificationPrediction/${propId}`).set(data, onComplete);

	// The public API interface
	return {
		addGame,
		getGame,
		getGames,
		updateGame,
		setCountries,
		getCountries,
		getGroups,
		setGroups,
		getUsers,
		getUser,
		updateUser,
		addUser,
		isUserExist,
		getUserGame,
		updateUserGame,
		updateUserQulification
	};
}]);



appModule.provider('firebase', function () {
	this.config = null;

	this.setConfig = (config) => this.config = config;

	this.$get = ['$q', '$window', ($q, $window) => {
		$window.firebase.initializeApp(this.config);
		return $window.firebase;
	}];
});

appModule.config(["firebaseProvider", function (firebaseProvider) {

	const config = {
		apiKey: "AIzaSyCMJoqKwnJAoQB3L6dZkqi1kG4WkHanlXE",
		authDomain: "predictors-games.firebaseapp.com",
		databaseURL: "https://predictors-games.firebaseio.com",
		storageBucket: ""
	};

	firebaseProvider.setConfig(config);
}]);

module.exports = appModule.name;