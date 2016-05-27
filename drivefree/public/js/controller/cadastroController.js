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

	$scope.objCliente = {}; //recebe as informacoes do cliente registradas na tela de cadastro
	$scope.arrayCarros = [];
	$scope.exibir = 0;
	$scope.arrayPedido = [];

	
	$scope.SalvarCliente = function () {
		var cliente = $scope.objCliente;
		$http.post("/salvarCliente", cliente, {
			headers: { 'Content-Type': 'application/json'}
		})
		.then(
				function(response) {
					$scope.exibir = 1;
					$scope.objCliente = cliente;
					//$window.location.href = '../../selecionarCarro.html';

				},
				function(response) {
					alert(response.data);
				}
		);
	}
	
	
	
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
		
		$scope.exibir = 1;
		$scope.objCliente = cliente;

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
	
	$scope.GravarPedido = function (carros) {
		var carroEscolhido = carros;
		var cliente = $scope.objCliente;
		var pedido = $scope.arrayPedido;
		
		$http.post("/salvarPedido", pedido, {
			headers: { 'Content-Type': 'application/json'}
		})
		.then(
				function(response) {
					$scope.exibir = 2;
					$scope.arrayPedido = pedido;			
					//$window.location.href = '../../final.html';

				},
				function(response) {
					alert(response.data);
				}
		);
	}
	
	
	
	$scope.salvarPedido = function (carros) {
		var carroEscolhido = carros;
		var cliente = $scope.objCliente;
		
		var pedido = {
				id: carros._id,
				placa:carroEscolhido.placa,
				modelo:carroEscolhido.modelo,
				nomeCliente:cliente.nome,
				identidade:cliente.rg,
				email:cliente.email,
				telefone:cliente.telefone,
				status:"1",
				nHabilitacao:cliente.nHabilitacao
		};
		$scope.exibir = 2;
		$scope.arrayPedido = pedido;
		
	}

	$scope.concluirPedido = function(){
		$scope.GravarPedido();
		$scope.SalvarCliente();
		
		alert('Seu pedido foi cadastrado');
		$window.location.href = '../../index.html';
	}
	
	$scope.voltarIndex = function(){
		alert('Seu pedido foi cancelado');
		$window.location.href = '../../index.html';
	}






});
