"use strict";

require('./leaderBoard.less');


const appModule = angular.module('leaderBoard', []);

LeaderBoardController.$inject = [];
function LeaderBoardController() {

}

appModule.component('leaderBoard', {
	bindings: {

	},
	controllerAs: 'leaderBoardCtrl',
	controller: LeaderBoardController,
	template: require('./leaderBoard.html')
});

module.exports = appModule.name;