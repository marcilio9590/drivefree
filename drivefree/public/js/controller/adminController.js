angular.module("app").controller("adminController", function($scope, $http, $window){
	$scope.carrosA = [];
	$scope.active = 0;
	$scope.user = {};

	$scope.connectionUser = function() {
		
		$http({
			  method: 'GET',
			  url: '/sessaoConsultar'
		}).then(function successCallback(response) {
			$scope.user = response.data;
			if ($scope.user.length != 0) {
				$scope.active = 1;
			} else {
				//alert("Erro no login!\nTente novamente!");
				$window.location.href = "../../erroacesso.html";
			}
			
		}, function errorCallback(response){
			alert(response.data);
		});
	}
	
	$scope.connectionUser();
	
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
		var carro = {modelo: $scope.modelo, ano: $scope.ano,placa:$scope.placa,cor: $scope.cor, tipo:$scope.categoria, preco:preco};
		$http.post("salvarCarro", carro, {
			headers: {'Content-Type' : 'application/json'}
		})
		.then(function(response){
			var obj = response.data;
			

			if(obj.tipo == "A"){
				$scope.carrosA.push(obj);
			}else if(obj.tipo == "B"){
				$scope.carrosB.push(obj);
			}else if(obj.tipo == "C"){
				$scope.carrosC.push(obj);
			}
			$scope.limpar();
		}, function(response){
			alert(response.data);	
		});

	}

	
	//listagem dos carros por categoria
	$scope.carrosA = function(){
		$http({
			method: 'GET',
			url: '/listaCarroA'
		})
		.then(function successCallback(response){
			$scope.carrosA = response.data;
		}, function errorCallback(response){
			alert(response.data);	
		});
	}
	$scope.carrosA();

	$scope.carrosB = function(){
		$http({
			method: 'GET',
			url: '/listaCarroB'
		})
		.then(function successCallback(response){
			$scope.carrosB = response.data;
		}, function errorCallback(response){
			alert(response.data);	
		});
	}
	$scope.carrosB();

	$scope.carrosC = function(){
		$http({
			method: 'GET',
			url: '/listaCarroC'
		})
		.then(function successCallback(response){
			$scope.carrosC = response.data;
		}, function errorCallback(response){
			alert(response.data);	
		});
	}
	$scope.carrosC();
	
	//--fim--
	
		




});
