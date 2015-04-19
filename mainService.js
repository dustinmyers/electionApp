var app = angular.module('governmentApp');

app.service('governmentService', function($http, $q) {
	this.getInfo = function () {
	var dfr = $q.defer();
	$http.get('https://www.googleapis.com/civicinfo/v2/representatives?address=225+Paramount+Ave+Salt+Lake+City%2C+UT+84115&key=AIzaSyDlH64vzeoSx2npk5zrRmGtchFebY5UXMI')
		.then(function(results) {
			console.log(results);
			var offices = results.data.offices
			var officials = results.data.officials;
		  	for (var i = 0; i < officials.length; i++) {
		    	songInfoArray.push({
		    		Name: officials[i].name,
				    Photo: officials[i].photoUrl,
			        Party: officials[i].party,
			        Address: officials[i].address.0,
			        Website: officials[i].urls.0,
			        Title: offices[i].trackPrice,
			        Play: officials[i].previewUrl,
			        Type: officials[i].kind
				})

			dfr.resolve(results);
		})
		return dfr.promise;
	}
});//--end

for(var i = 0; i < offices; i++) {
	for(var j = 0; j < offices[i].officialIndices.length; j++) {
		var obj = {};
		obj.title = offic
	}
}