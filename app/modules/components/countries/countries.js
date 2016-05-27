"use strict";

require('./countries.less');
const _ = require('lodash');

const appModule = angular.module('countries', []);

CountriesController.$inject = ['FirebaseService', '$scope'];
function CountriesController(FirebaseService, $scope) {
	const c = [
		"Albania",
		"Austria",
		"Belgium",
		"Croatia",
		"Czech Republic",
		"England",
		"France",
		"Germany",
		"Hungary",
		"Iceland",
		"Italy",
		"Northern Ireland",
		"Poland",
		"Portugal",
		"Republic Of Ireland",
		"Romania",
		"Russia",
		"Slovakia",
		"Spain",
		"Sweden",
		"Switzerland",
		"Turkey",
		"Ukraine",
		"Wales"
	];

	//FirebaseService.addCountries(c);

	FirebaseService.getCountries().then(countries =>
		$scope.$apply(() => this.countries = countries));
}

appModule.component('countries', {
	controllerAs: 'countriesCtrl',
	controller: CountriesController,
	template: require('./countries.html')
});

module.exports = appModule.name;