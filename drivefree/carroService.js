function CarroService(mongoose, appSchema){
	var Carro = mongoose.model("Carro", appSchema.carroSchema);	
	var Login = mongoose.model("Login", appSchema.loginSchema);	 
	var Pedido = mongoose.model("Pedido", appSchema.pedidoSchema);	


	this.salvarCarro = function(carro, successCallback, errorCallback){
		var carroSave = new Carro(carro);

		carroSave.save(function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.salvarPedido = function(p_contato, successCallback, errorCallback){
		var id_carro = p_contato.id;
		var pedidoSave = new Pedido(p_contato);

		pedidoSave.save(function (err, data){		
		//Carro.update({_id:id_carro},{$set:{status:"0"}},function (err, data){
			if (err) errorCallback(err);
			else successCallback(data);
		//});	
		//perguntar a vitor como fica para dar um save e um update ao mesmo tempo
		});	
	}



	this.finalizarPedido = function(pedido, successCallback, errorCallback){
		Pedido.update({_id: pedido._id},
				{$set: {status:"0"}},function (err, data){
					if (err) errorCallback(err);

					else successCallback(data);
				});	
	}
	
	this.editarCarro = function(carro, successCallback, errorCallback){
		Carro.update({_id: carro.id},
				{$set: {modelo: carro.modelo,ano:carro.ano,placa:carro.placa,cor:carro.cor,categoria:carro.categoria}},function (err, data){
					if (err) errorCallback(err);

					else successCallback(data);
				});	
	}
	

	this.removerCarro = function(id, successCallback, errorCallback){
		Carro.remove({_id:id},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarroA = function(successCallback, errorCallback){
		Carro.find({tipo:"A"},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarroB = function(successCallback, errorCallback){
		Carro.find({tipo:"B"},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarroC = function(successCallback, errorCallback){
		Carro.find({tipo:"C"},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarro = function(successCallback, errorCallback){
		Carro.find({status:"1"},function (err, data){ //status 1 carro disponivel
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}
	
	this.listarPedidos = function(successCallback, errorCallback){
		Pedido.find({status:"1"},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}


	//funcao para login
	this.getLogin = function(p_contato, successCallback, errorCallback){
		Login.find({user:p_contato.login, password:p_contato.password},function (err, data){
			if (err) req(err.message);
			else successCallback(data);
		});	
	}



}


module.exports.CarroService = CarroService;

