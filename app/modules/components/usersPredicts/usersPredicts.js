"use strict";

require('./usersPredicts.less');
const _ = require('lodash');

const appModule = angular.module('usersPredicts', [
	require('./gamesResults/gamesResults')
]);

UsersPredictsController.$inject = ['FirebaseService', '$scope'];
function UsersPredictsController(FirebaseService, $scope) {

	FirebaseService.getUsers().then(results => {
		const users = _.values(results).map(user => ({id: user.id, value: user.name}));
		$scope.$apply(()=> this.users = users);
	});

	//this.users = UsersService.getUsers().map(user => ({id: user.id, value: user.name}));

	this.champion = "England";
	this.runnerUp = "England";

	this.groups = [
		[
			{title: 'Group 1 winner:', value: "England"},
			{title: 'Group 1 runner up:', value: "England"}
		],
		[
			{title: 'Group 2 winner:', value: "England"},
			{title: 'Group 2 runner up:', value: "England"}
		],
		[
			{title: 'Group 3 winner:', value: "England"},
			{title: 'Group 3 runner up:', value: "England"}
		],
		[
			{title: 'Group 4 winner:', value: "England"},
			{title: 'Group 4 runner up:', value: "England"}
		]
	];

	this.onSelectedUser = () => {
		FirebaseService.getUser(this.userSelected).then(user => {
			$scope.$apply(()=> {
				this.userDetails = user;
				const qulificationPrediction = user.qulificationPrediction;
				this.champion = qulificationPrediction.champion.firstPlace;
				this.runnerUp = qulificationPrediction.champion.secondPlace;
				this.groups = [
					[
						{title: 'Group A winner:', value: qulificationPrediction.A.firstPlace},
						{title: 'Group A runner up:', value: qulificationPrediction.A.secondPlace}
					],
					[
						{title: 'Group B winner:', value: qulificationPrediction.B.firstPlace},
						{title: 'Group B runner up:', value: qulificationPrediction.B.secondPlace}
					],
					[
						{title: 'Group C winner:', value: qulificationPrediction.C.firstPlace},
						{title: 'Group C runner up:', value: qulificationPrediction.C.secondPlace}
					],
					[
						{title: 'Group D winner:', value: qulificationPrediction.D.firstPlace},
						{title: 'Group D runner up:', value: qulificationPrediction.D.secondPlace}
					],
					[
						{title: 'Group E winner:', value: qulificationPrediction.E.firstPlace},
						{title: 'Group E runner up:', value: qulificationPrediction.E.secondPlace}
					],
					[
						{title: 'Group F winner:', value: qulificationPrediction.F.firstPlace},
						{title: 'Group F runner up:', value: qulificationPrediction.F.secondPlace}
					]
				];
			});
		});
	};

}

appModule.component('usersPredicts', {
	bindings: {

	},
	controllerAs: 'usersPredictsCtrl',
	controller: UsersPredictsController,
	template: require('./usersPredicts.html')
});

module.exports = appModule.name;