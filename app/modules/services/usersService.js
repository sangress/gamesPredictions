'use strict';

const appModule = angular.module('UsersService', []);

appModule.factory('UsersService', () => {

		const getUsers = () => {

			return [
				{
					"id": "5745b2d62f39ada5075f3922",
					"currRank": 5,
					"prevRank": 3,
					"name": "Mona Frazier"
				},
				{
					"id": "5745b2d6d5384f778dbcda61",
					"currRank": 4,
					"prevRank": 0,
					"name": "Donna Jarvis"
				},
				{
					"id": "5745b2d6aba47ee021a4e050",
					"currRank": 2,
					"prevRank": 1,
					"name": "Finch Morin"
				},
				{
					"id": "5745b2d63ec4d0e578c513da",
					"currRank": 3,
					"prevRank": 4,
					"name": "Rosalinda Burton"
				},
				{
					"id": "5745b2d6fc1daa741df76818",
					"currRank": 1,
					"prevRank": 3,
					"name": "Mejia Merritt Mejia Merritt Mejia Merritt"
				},
				{
					"id": "5745b2d658462f67d8f535b4",
					"currRank": 0,
					"prevRank": 6,
					"name": "Mccray Berry"
				}
			];
		};

		// The public API interface
		return {
			getUsers
		};

	});

module.exports = appModule.name;