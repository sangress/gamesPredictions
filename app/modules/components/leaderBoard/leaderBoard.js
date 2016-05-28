"use strict";

require('./leaderBoard.less');
const _ = require('lodash');

const appModule = angular.module('leaderBoard', []);

LeaderBoardController.$inject = [];
function LeaderBoardController(UsersService) {

	//this.users = _.sortBy(UsersService.getUsers(), (user) => user.currRank);

}

appModule.component('leaderBoard', {
	bindings: {
		userPredictionsClicked: "&"
	},
	controllerAs: 'leaderBoardCtrl',
	controller: LeaderBoardController,
	template: require('./leaderBoard.html')
});

module.exports = appModule.name;