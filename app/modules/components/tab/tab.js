"use strict";

require('./tab.less');


const appModule = angular.module('tab', []);

TabController.$inject = [];
function TabController() {

	const render = () => this.checked = this.ngModel.$viewValue === this.id;
	this.$onInit = () => this.ngModel.$render = render;
}

appModule.component('tab', {
	bindings: {
		id: "@",
		tabName: "@"
	},
	require: {
		ngModel: "ngModel"
	},
	controllerAs: 'tabCtrl',
	controller: TabController,
	template: require('./tab.html')
});

module.exports = appModule.name;