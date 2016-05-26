angular.module("app").controller("selecionarCarroController", function($scope, $http){
	
	$scope.arrayCarros = [];
	
	$scope.carregarCarros = function(){
		$http({
			method: 'GET',
			url: '/listaCarro'
		})
		.then(function successCallback(response){
			$scope.arrayCarros = response.data;
			
		}, function errorCallback(response){
			
			alert(response.data);	
			
		});
	};
	
	
});
