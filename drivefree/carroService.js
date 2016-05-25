function CarroService(mongoose, appSchema){
	var Carro = mongoose.model("Carro", appSchema.carroSchema);	
	var Login = mongoose.model("Login", appSchema.loginSchema);	 


	this.salvarCarro = function(p_contato, successCallback, errorCallback){
		var carroSave = new Carro(p_contato);

		carroSave.save(function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarroA = function(successCallback, errorCallback){
		Carro.find({"categoria.tipo":"A"},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarroB = function(successCallback, errorCallback){
		Carro.find({"categoria.tipo":"B"},function (err, data){
			if (err) errorCallback(err);

			else successCallback(data);
		});	
	}

	this.listaCarroC = function(successCallback, errorCallback){
		Carro.find({"categoria.tipo":"C"},function (err, data){
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

