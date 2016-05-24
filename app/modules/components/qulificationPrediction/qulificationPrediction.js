"use strict";

require('./qulificationPrediction.less');


const appModule = angular.module('qulificationPrediction', []);

QulificationPredictionController.$inject = [];
function QulificationPredictionController() {

}

appModule.component('qulificationPrediction', {
	bindings: {

	},
	controllerAs: 'qulificationPredictionCtrl',
	controller: QulificationPredictionController,
	template: require('./qulificationPrediction.html')
});

module.exports = appModule.name;