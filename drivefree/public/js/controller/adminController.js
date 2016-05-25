angular.module("app").controller("adminController", function($scope, $http){
	
$scope.adicionarCarro = function(){
		
		var preco = "";
		if($scope.categoria == "A"){
			preco = "300";
		}
		
		if($scope.categoria == "B"){
			preco = "150";
		}
		if($scope.categoria == "C"){
			preco = "75";
		}
		
		var categoria = [$scope.categoria,preco];
		
		var carro = {modelo: $scope.modelo, ano: $scope.ano,placa:$scope.placa,cor:$Scope.cor,categoria:categoria};
		
		$http.post("salvarCarro", carro, {
			
			headers: {'Content-Type' : 'application/json'}
			
		})
		
		.then(function(response){
			
			$scope.carregarListaUsuarios();
			
		}, function(response){
			
			alert(response.data);	
			
		});
		
	}
	
	
	
});
