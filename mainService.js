var app = angular.module('governmentApp');

// 225+Paramount+Ave+Salt+Lake+City%2C+UT+84115

app.service('governmentService', function($http, $q) {
	this.getOfficialsInfo = function (userAddress, userCity, userState, userPostalCode) {
	var dfr = $q.defer();
	// userAddress = userAddress.split(' ').join('+');
	// userCity = userCity.split(' ').join('+');
	var countryOfficials = [];
	var congressOfficials = [];
	var stateOfficials = [];
	var localOfficials = [];
	$http.get('https://www.googleapis.com/civicinfo/v2/representatives?address=225+Paramount+Ave+Salt+Lake+City%2C+UT+84115&key=AIzaSyDlH64vzeoSx2npk5zrRmGtchFebY5UXMI')
	// $http.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + userAddress + '+' + userCity + '+' + userState + '+' + userPostalCode + '&key=AIzaSyDlH64vzeoSx2npk5zrRmGtchFebY5UXMI')
		.then(function(results) {
			console.log(results);
			var offices = results.data.offices
			var officials = results.data.officials;
		  	for (var i = 2; i < 4; i++) {
		    	countryOfficials.push({
		    		name: officials[i].name,
				    photo: officials[i].photoUrl,
			        party: officials[i].party,
			        address: officials[i].address,
			        website: officials[i].urls
				})
			}
			for (var i = 5; i < officials.length; i++) {
		    	stateOfficials.push({
		    		name: officials[i].name,
				    photo: officials[i].photoUrl,
			        party: officials[i].party,
			        address: officials[i].address,
			        website: officials[i].urls
				})
			}
	    	congressOfficials.push({
	    		name: officials[0].name,
			    photo: officials[0].photoUrl,
		        party: officials[0].party,
		        address: officials[0].address,
		        website: officials[0].urls
			})
			congressOfficials.push({
	    		name: officials[4].name,
			    photo: officials[4].photoUrl,
		        party: officials[4].party,
		        address: officials[4].address,
		        website: officials[4].urls
			})
			var countryResults = countryOfficials;
			var stateResults = stateOfficials;
			var congressResults = congressOfficials;
			console.log(countryResults, congressResults, stateResults);
			dfr.resolve(countryResults, congressResults, stateResults);
		})
		return dfr.promise;
	}
});//--end

// for(var i = 0; i < offices; i++) {
// 	for(var j = 0; j < offices[i].officialIndices.length; j++) {
// 		var titleObj = {}
// 		titleObj.index = [j];
// 		titleObj.title = offices[i].name;
// 	}
// }