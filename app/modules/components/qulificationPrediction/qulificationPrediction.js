"use strict";

require('./qulificationPrediction.less');


const appModule = angular.module('qulificationPrediction', []);

QulificationPredictionController.$inject = ['CountriesService'];
function QulificationPredictionController(CountriesService) {

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
}

appModule.component('qulificationPrediction', {
	bindings: {

	},
	controllerAs: 'qulificationPredictionCtrl',
	controller: QulificationPredictionController,
	template: require('./qulificationPrediction.html')
});

module.exports = appModule.name;