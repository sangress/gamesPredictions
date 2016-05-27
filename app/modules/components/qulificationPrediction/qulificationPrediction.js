"use strict";

require('./qulificationPrediction.less');
const _ = require('lodash');

const appModule = angular.module('qulificationPrediction', [
	require('./group/group')
]);

QulificationPredictionController.$inject = ['CountriesService', 'FirebaseService', '$scope'];
function QulificationPredictionController(CountriesService, FirebaseService, $scope) {

	this.countriesOptions = CountriesService.getCountries().map(country => ({id: country.id, value: country.country}));
	
	this.scoreOptions = [
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

	FirebaseService.getGroups()
		.then(groups =>	{
			const groupsNames = _.keys(groups);
			const g = groupsNames.reduce((arr, name) => {
				arr.push({name: name, countries: groups[name]});
				return arr;
			}, []);

			$scope.$apply(() => this.groups = g);
		});
}

appModule.component('qulificationPrediction', {
	bindings: {

	},
	controllerAs: 'qulificationPredictionCtrl',
	controller: QulificationPredictionController,
	template: require('./qulificationPrediction.html')
});

module.exports = appModule.name;