var app = angular.module('governmentApp', ['ngMaterial', 'ui.router'])
	.config([$mdThemingProvider, function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('blue-grey')
	    .accentPalette('light-blue');
	}]);

	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html'	
			})
	}]);