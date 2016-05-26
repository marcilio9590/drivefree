function CarroService(mongoose, appSchema){
	var Carro = mongoose.model("Carro", appSchema.carroSchema);	
	var Login = mongoose.model("Login", appSchema.loginSchema);	 
	var Pedido = mongoose.model("Pedido", appSchema.pedidoSchema);	 

	this.salvarCarro = function(p_contato, successCallback, errorCallback){
		var carroSave = new Carro(p_contato);

		carroSave.save(function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.salvarPedido = function(p_contato, successCallback, errorCallback){
		var pedidoSave = new Pedido(p_contato);

		pedidoSave.save(function (err, data){
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
		Carro.find({},function (err, data){
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

