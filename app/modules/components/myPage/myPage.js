"use strict";

require('./myPage.less');


const appModule = angular.module('myPage', []);

MyPageController.$inject = [];
function MyPageController() {

}

appModule.component('myPage', {
	bindings: {

	},
	controllerAs: 'myPageCtrl',
	controller: MyPageController,
	template: require('./myPage.html')
});

module.exports = appModule.name;