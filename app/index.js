"use strict";

window.angular = require('angular');
require('./styles/globals.less');
require('./styles/general.less');
require('./styles/btns.less');
require('./styles/inputs.less');
//const dropdown = require('angular-ui-bootstrap/src/dropdown');

angular.module('appEntry', [
	require('angular-ui-router'),
	require('angular-animate'),
	require('angular-ui-select'),
	require('./modules').name
]);
