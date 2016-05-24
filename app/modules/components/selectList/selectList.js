"use strict";

require('./select.css');
require('./selectList.less');
require('./selectListFilter/selectListFilter.less');


const swModule = angular.module('selectList', []);

SelectListController.$inject = [];
function SelectListController() {
	this.placeholder = 'Select';
	this.options = [{id: null, value: "Select"}, {id: 1, value: "one"}, {id: 2, value: "two"}, {id: 3, value: "tree"}];

	this.onSelect = ($item, $model) => {
		
		console.log($model);
		this.ngModel.$setViewValue($model);
		this.model = $model;
	};

	const render = () => {
		if(!this.ngModel.$viewValue) {
			return;
		}

		this.model = this.ngModel.$viewValue;
	};

	this.$onInit = () => this.ngModel.$render = render;
}


swModule.component('selectList', {
	template: require('./selectListFilter/selectListFilter.html'),
	bindings: {

	},
	require: {ngModel: 'ngModel'},
	controllerAs: 'selectListCtrl',
	controller: SelectListController
});

swModule.run(['$templateCache', ($templateCache) => {
	/* field templates */
	$templateCache.put('selectListFilter', require('./selectListFilter/selectListFilter.html'));
	$templateCache.put('selectListFilter/choices.tpl.html', require('./selectListFilter/choices.tpl.html'));
	$templateCache.put('selectListFilter/match-multiple.tpl.html', require('./selectListFilter/match-multiple.tpl.html'));
	$templateCache.put('selectListFilter/match.tpl.html', require('./selectListFilter/match.tpl.html'));
	$templateCache.put('selectListFilter/select-multiple.tpl.html', require('./selectListFilter/select-multiple.tpl.html'));
	$templateCache.put('selectListFilter/select.tpl.html', require('./selectListFilter/select.tpl.html'));

}]);

module.exports = swModule.name;