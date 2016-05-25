'use strict';

const appModule = angular.module('GamesService', []);

appModule.factory('GamesService', () => {

		const getGames = () => {
			return [
				{
					id: 0,
					teamOne: {id: "Moshe", value: "Moshe"},
					teamTwo: {id: "Israel", value: "Israel"},
					time: "2016-05-27 08:25:41"
				}, {
					id: 1,
					teamOne: {id: "Moshe", value: "Moshe"},
					teamTwo: {id: "Israel", value: "Israel"},
					time: "2016-05-27 08:25:41"
				},{
					id: 2,
					teamOne: {id: "Moshe", value: "Moshe"},
					teamTwo: {id: "Israel", value: "Israel"},
					time: "2016-05-27 08:25:41"
				}
			];
		};

		// The public API interface
		return {
			getGames
		};

	});

module.exports = appModule.name;