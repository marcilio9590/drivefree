angular.module("app").controller("cadastroController", function($scope, $http, $window){
	
	$scope.nome = "";
	$scope.rg = "";
	$scope.sexo = "";
	$scope.email = "";
	$scope.senha = "";
	$scope.nHabilitacao = "";
	$scope.validadeHabilitacao = "";
	$scope.cep = "";
	$scope.endereco = "";
	$scope.bairro = "";
	$scope.cidade = "";
	$scope.telefone = "";
	
	$scope.adicionarCliente = function () {
		var cliente = {
				
				nome: $scope.nome,
				rg: $scope.rg,
				sexo: $scope.sexo,
				email: $scope.email,
				senha: $scope.senha,
				nHabilitacao:  $scope.nHabilitacao,
				validadeHabilitacao: $scope.validadeHabilitacao,
				cep: $scope.cep,
				endereco: $scope.endereco,
				bairro: $scope.bairro,
				cidade: $scope.cidade,
				telefone: $scope.telefone
				
		};
		$http.post("/salvarCliente", cliente, {
			headers: { 'Content-Type': 'application/json'}
		})
		.then(
			function(response) {
				$window.location.href = '../../index.html';
			},
			function(response) {
				alert(response.data);
			}
		);
	}
	
	$scope.limparCampos = function(){
		
		$scope.nome = "";
		$scope.rg = "";
		$scope.sexo = "";
		$scope.email = "";
		$scope.senha = "";
		$scope.nHabilitacao = "";
		$scope.validadeHabilitacao = "";
		$scope.cep = "";
		$scope.endereco = "";
		$scope.bairro = "";
		$scope.cidade = "";
		$scope.telefone = "";
		
		
	}
	
});
