"use strict";

require('./group.less');


const appModule = angular.module('group', []);

GroupController.$inject = ['$scope', '$timeout'];
function GroupController($scope, $timeout) {
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

	let watch = null;
	this.onSelected = () => {
		const group = angular.copy(this.group);
		group.firstPlace = this.firstPlaceModel;
		group.firstPlaceScore = this.firstPlaceScoreModel;
		group.secondPlace = this.secondPlaceModel;
		group.secondPlaceScore = this.secondPlaceScoreModel;
		this.ngModel.$setViewValue(group);

		watch = $scope.$on(this.id + '-update-completed', () => {
			$scope.$apply( () => {
				this.showSave = true;

				$timeout( () => this.showSave = false, 1000);
				watch();
				watch = null;
			});
		});
	};

	$scope.$on('$destroy', () => {
		if (watch !== null) {
			watch();
			watch = null;
		}
	});
}

appModule.component('group', {
	bindings: {
		id: "@",
		countries: "=",
		totalScore: "=",
		groupName: "@",
		firstPlaceTitle: "@",
		secondPlaceTitle: "@",
		disabled: "="
	},
	require: {ngModel: 'ngModel'},
	controllerAs: 'groupCtrl',
	controller: GroupController,
	template: require('./group.html')
});

module.exports = appModule.name;