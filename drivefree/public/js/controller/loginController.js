angular.module("app").controller("loginController", function($scope, $http, $window){
	
	$scope.login = "";
	$scope.password = "";
	$scope.user = [];
	
	$scope.efetuarLogin = function() {
		if ($scope.login.length != 0 && $scope.password.length != 0) {
			$http({
				method: 'GET',
				url: '/getUser/'+$scope.login+"/"+$scope.password
			}).then(function successCallback(response) {
				$scope.user = response.data;
				if ($scope.user.length != 0) {
					alert("Login realizado com sucesso!");
					$window.location.href = '../../admin.html';
				} else {
					alert("Erro no login!\nTente novamente!");
					$scope.login = "";
					$scope.password = "";
				}
			}, function errorCallback(response){
				alert(response.data);
			});
		} else {
			alert('Entre com valores nos campos login e senha!')
		}
	}
});
