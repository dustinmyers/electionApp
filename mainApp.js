var app = angular.module('governmentApp', ['ngMaterial'])
	.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('grey');
	});

	// .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	// 	$urlRouterProvider.otherwise('/');

	// 	$stateProvider
	// 		.state('home', {
	// 			url: '/',
	// 			templateUrl: 'templates/home.html'	
	// 		})
	// }]);