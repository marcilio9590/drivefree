angular.module("app").controller("indexController", function($scope, $http, $window){
	
	
	$scope.getLongin = function() {
		
		$http({
			  method: 'GET',
			  url: '/sessaoConsultar'
		}).then(function successCallback(response) {
			$scope.user = response.data;
			if ($scope.user != undefined && $scope.user.length != 0) {
				$window.location.href = "../../admin.html";
			} else {
				$window.location.href = "../../login.html";
			}
			
		}, function errorCallback(response){
			alert(response.data);
		});
	}
});
