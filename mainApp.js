var app = angular.module('governmentApp', ['ngMaterial'])
	.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('light-blue');
});