var app = angular.module('governmentApp');
app.controller('governmentCtrl', function($scope, governmentService) {
	
	// $scope.test = 'test'; successful
	$scope.title1 = 'Submit';


	$scope.getOfficials = function() {
		governmentService.getOfficialsInfo($scope.userAddress, $scope.userCity, $scope.userState, $scope.userPostalCode)
		.then(function(countryResult, congressResults, stateResult) {
			$scope.countryOfficials = countryResult;
			$scope.stateOfficials = stateResult;
			$scope.congressOfficials = congressResults;
		})
	}

	$scope.getOfficials();






});//--end