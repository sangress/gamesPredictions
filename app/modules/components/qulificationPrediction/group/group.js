"use strict";

require('./group.less');


const appModule = angular.module('group', []);

GroupController.$inject = ['$scope'];
function GroupController($scope) {
	$scope.$watch('groupCtrl.countries', () => {

		if (angular.isUndefined(this.countries)) {
			return;
		}

		this.countriesOptions = this.countries.map(country => ({id: country, value: country}));
	});

	const render = () => {
		this.group = this.ngModel.$viewValue || {};
		this.firstPlaceModel = this.group.firstPlace;
		this.firstPlaceScoreModel = this.group.firstPlaceScore;
		this.secondPlaceModel = this.group.secondPlace;
		this.secondPlaceScoreModel = this.group.secondPlaceScore;
	};

	this.$onInit = () =>
		this.ngModel.$render = render;

	this.onChange = () => {
		const group = angular.copy(this.group);
		group.firstPlace = this.firstPlaceModel;
		group.firstPlaceScore = this.firstPlaceScoreModel;
		group.secondPlace = this.secondPlaceModel;
		group.secondPlaceScore = this.secondPlaceScoreModel;
		this.ngModel.$setViewValue(group);
	};
}

appModule.component('group', {
	bindings: {
		countries: "=",
		totalScore: "=",
		groupName: "@",
		firstPlaceTitle: "@",
		secondPlaceTitle: "@"
	},
	require: {ngModel: 'ngModel'},
	controllerAs: 'groupCtrl',
	controller: GroupController,
	template: require('./group.html')
});

module.exports = appModule.name;