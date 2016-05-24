"use strict";

require('./myPage.less');


const appModule = angular.module('myPage', []);

MyPageController.$inject = [];
function MyPageController() {
	this.options = [{id: null, value: "Select"}, {id: 1, value: "one"}, {id: 2, value: "two"}, {id: 3, value: "tree"}];
}

appModule.component('myPage', {
	bindings: {

	},
	controllerAs: 'myPageCtrl',
	controller: MyPageController,
	template: require('./myPage.html')
});

module.exports = appModule.name;