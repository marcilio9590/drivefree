angular.module("app").controller("adminController", function($scope, $http){

	$scope.limpar = function(){
		$scope.modelo = '';
		$scope.ano = '';
		$scope.placa = '';
		$scope.cor = '';
		$scope.categoria = '';
	}

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

		var categoria = [{tipo:$scope.categoria,preco:preco}];
		var carro = {modelo: $scope.modelo, ano: $scope.ano,placa:$scope.placa,cor: $scope.cor, categoria:categoria};
		$http.post("salvarCarro", carro, {
			headers: {'Content-Type' : 'application/json'}
		})
		.then(function(response){

			$scope.limpar();

		}, function(response){

			alert(response.data);	

		});

	}



});
