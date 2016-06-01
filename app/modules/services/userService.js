'use strict';

const appModule = angular.module('userService', []);

appModule.factory('userService', ['FirebaseService', (FirebaseService) => {

	const getNewUserDetails = (id, name, email) => {
		const user = {
			id: id,
			name: name,
			email: email,
			prevRank: 0,
			currRank: 0,
			totleScore: 0,
			qulificationPrediction: {
				champion: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				},
				A: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				},
				B: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				},
				C: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				},
				D: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				},
				E: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				},
				F: {
					firstPlace: "",
					firstPlaceScore: 0,
					secondPlace: "",
					secondPlaceScore: 0
				}
			},
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