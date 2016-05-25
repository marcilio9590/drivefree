function CarroService(mongoose, appSchema){
	var Carro = mongoose.model("Carro", appSchema.carroSchema);	
	
	this.salvarCarro = function(p_contato, successCallback, errorCallback){
		var carroSave = new Carro(p_contato);
		
		carroSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}

module.exports.CarroService = CarroService;

