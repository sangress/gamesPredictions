'use strict';

const appModule = angular.module('FirebaseService', []);

appModule.factory('FirebaseService', ['firebase', (firebase) => {


	const fbDb = firebase.database();
	const resultsFun = (resuls) => resuls.val();


	// games

	//const getGame = (gameId) => fbDb.ref('/games/' + gameId).once('value').then(resultsFun);

	// Countries
	const getCountries = () => fbDb.ref('/countries/').once('value').then(resultsFun);
	const setCountries = (countries) => fbDb.ref('/countries').set(countries);

	// Groups
	const getGroups = () => fbDb.ref('/groups/').once('value').then(resultsFun);
	const setGroups = (groups) => fbDb.ref('/groups').set(groups);

	// Games
	const getGames = () => fbDb.ref('/games/').once('value').then(resultsFun);
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
	const addUser = (user) => fbDb.ref('users/' + user.id).set(user);

	// The public API interface
	return {
		addGame,
		getGames,
		setCountries,
		getCountries,
		getGroups,
		setGroups,
		getUsers,
		getUser,
		addUser,
		isUserExist
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

//appModule.run( ['$window', function( $window ) {
//
//	(function(d, s, id){
//		var js, fjs = d.getElementsByTagName(s)[0];
//		if (d.getElementById(id)) {return;}
//		js = d.createElement(s); js.id = id;
//		js.src = "https://www.gstatic.com/firebasejs/live/3.0/firebase.js";
//		fjs.parentNode.insertBefore(js, fjs);
//	}(document, 'script', 'firebase-jssdk'));
//}]);
//
//appModule.factory('FacebookService', [ 'facebook',
//	function FacebookServiceFactory(facebook) {
//
//		const facebookPromise = facebook.promise;
//
//		const getLoginStatus = (cb) =>
//			facebookPromise.then(FB =>
//				FB.getLoginStatus(cb));
//
//		const login = (permissions, cb) =>
//			facebookPromise.then(FB => FB.login(cb, permissions));
//
//		const logout = (cb) =>
//			facebookPromise.then(FB => FB.logout(cb));
//
//		const friends = (cb) =>
//			facebookPromise.then(FB =>
//				FB.api('/me/friendlists', cb));
//
//		const sendMessage = (message, to, cb) =>
//			facebookPromise.then(FB => FB.ui({
//				app_id: 'YOUR FB APP ID',
//				method: 'send',
//				name: "NAME",
//				link: 'LONK TO YOUR WEBSITE',
//				to: to,
//				description: message
//
//			}, cb));
//
//		const me = (cb) =>
//			facebookPromise.then(FB => FB.api('/me', cb));
//
//		// The public API interface
//		return {
//			login,
//			logout,
//			getLoginStatus,
//			me,
//			friends,
//			sendMessage
//		};
//
//	}]);

module.exports = appModule.name;