angular.module("app").controller("erroController", function($scope, $http, $window){

	$scope.showLogin = function () {
		$window.location.href = "../../login.html";
	}
});
