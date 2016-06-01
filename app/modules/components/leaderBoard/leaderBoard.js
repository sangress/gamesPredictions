"use strict";

require('./leaderBoard.less');
const _ = require('lodash');

const appModule = angular.module('leaderBoard', []);

LeaderBoardController.$inject = ['FirebaseService', '$scope'];
function LeaderBoardController(FirebaseService, $scope) {

	FirebaseService.getUsers().then(results => {
		const users = _.sortBy(results, user => user.currRank * -1);
		$scope.$apply(()=> this.users = users);
	});


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