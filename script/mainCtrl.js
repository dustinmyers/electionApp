var app = angular.module('governmentApp');
app.controller('governmentCtrl', function($scope, governmentService) {
	
	// $scope.test = 'test'; successful


	$scope.getElectionsInfo = function() {
		governmentService.getInfo().then(function(response){
			$scope.officials = response;
		})
	}

	$scope.getElectionsInfo();



});//--end