'use strict';

const appModule = angular.module('userService', []);

appModule.factory('userService', ['FirebaseService', (FirebaseService) => {

	const getNewUserDetails = (id, name, email) => {
		const user = {
			id: id,
			name: name,
			email: email,
			prevRank: -1,
			currRank: -1,
			totleScore: 0,
			qulificationPrediction: [],
			gamesPredictions: []
		};

		return FirebaseService.getGames().then(games => {
			user.gamesPredictions = games;
			return user;
		});
	};

	// The public API interface
	return {
		getNewUserDetails
	};

}]);


module.exports = appModule.name;