angular.module("app").controller("adminController", function($scope, $http, $window){
	$scope.carrosA = [];
	$scope.active = 0;
	$scope.user = {};
	$scope.carroEditar = [];
	$scope.arrayPedidos = [];
	$scope.id_carro_edit = null;
	$scope.indexEditar = null;
	$scope.logando  = "";
	
	//function conecta usuario
	$scope.connectionUser = function() {
		
		$http({
			  method: 'GET',
			  url: '/sessaoConsultar'
		}).then(function successCallback(response) {
			$scope.user = response.data;
			if ($scope.user != undefined && $scope.user.length != 0) {
				$scope.active = 1;
				$scope.logando = $scope.user[0].user;
			} else {
				$window.location.href = "../../erroacesso.html";
			}
			
		}, function errorCallback(response){
			alert(response.data);
		});
	}

       $scope.connectionUser();
	
//function de sair
	$scope.logout = function () {
		$http({
			  method: 'GET',
			  url: '/logout'
		}).then(function successCallback(response) {
			$scope.user = response.data;
			
			
			$window.location.href = "../../login.html";
			
			
		}, function errorCallback(response){
			alert(response.data);
		});
	}

	$scope.chamarHome = function () {
		$window.location.href = "../../index.html";
	}

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
		var carro = {modelo: $scope.modelo, ano: $scope.ano,placa:$scope.placa,
				cor: $scope.cor, tipo:$scope.categoria, preco:preco,status:"1"};
		$http.post("salvarCarro", carro, {
			headers: {'Content-Type' : 'application/json'}
		})
		.then(function(response){
			var obj = response.data;


			if(obj.tipo == "A"){
				$scope.listarCarrosA();
			}else if(obj.tipo == "B"){
				$scope.listarCarrosB();
			}else if(obj.tipo == "C"){
				$scope.listarCarrosC();
			}
			$scope.limpar();
		}, function(response){
			alert(response.data);	
		});

	}


	//listagem dos carros por categoria

	$scope.listarCarrosA = function(){
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



	$scope.listarCarrosB = function(){
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


	$scope.listarCarrosC = function(){
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


	//--fim--

	$scope.removerCarro = function(carro){
		var obj = carro;


		$http.delete("deletarCarro/"+obj._id)
		.then(
				function(response){	
					if(obj.tipo == "A"){
						$scope.listarCarrosA();
					}else if(obj.tipo == "B"){
						$scope.listarCarrosB();
					}else if(obj.tipo == "C"){
						$scope.listarCarrosC();
					}
				},
				function(response){
					alert(response.data);
				});
	}


	$scope.editarCarro = function(carro){
		$scope.indexEditar = "1";
		$scope.id_carro_edit = $scope.carroEditar._id;
		$scope.carroEditar = carro;
		$scope.modelo = $scope.carroEditar.modelo;
		$scope.ano = $scope.carroEditar.ano;
		$scope.placa = $scope.carroEditar.placa;
		$scope.cor = $scope.carroEditar.cor;
		$scope.categoria = $scope.carroEditar.tipo;
	}

	$scope.finalizarEdicao = function(){
		var carro_Editando = {id:$scope.carroEditar._id, modelo: $scope.modelo, ano: $scope.ano, placa: $scope.placa, cor:$scope.cor, categoria:$scope.tipo};
		$http.put("/editarCarro", carro_Editando,{
			headers: {'Content-Type' : 'application/json'}
		})
		.then(function(response){
			$scope.id_carro = null;
			$scope.limpar();
			console.log(response.data);
			if($scope.carroEditar.tipo == "A"){
				$scope.listarCarrosA();

			}else if($scope.carroEditar.tipo == "B"){
				$scope.listarCarrosB();
			}else if($scope.carroEditar.tipo == "C"){
				$scope.listarCarrosC();
			}
			$scope.carroEditar = null;
			$scope.indexEditar = null;

		}, function(response){
			alert(response.data);	
		});
	}


	$scope.finalizarPedido = function(pedido){
		var pedido_edit = pedido;
		$http.put("/finalizarPedido", pedido_edit,{
			headers: {'Content-Type' : 'application/json'}
		})
		.then(function(response){
			console.log(response.data);
			$scope.listarPedidos();
		}, function(response){
			alert(response.data);	
		});
	}


	$scope.listarPedidos = function(){
		$http({
			method: 'GET',
			url: '/listarPedidos'
		})
		.then(function successCallback(response){
			$scope.arrayPedidos = response.data;
		}, function errorCallback(response){
			alert(response.data);	
		});
	}





	$scope.listarPedidos();
	$scope.listarCarrosA();
	$scope.listarCarrosB();
	$scope.listarCarrosC();
	$scope.connectionUser();


});
