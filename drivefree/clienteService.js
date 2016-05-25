function ClienteService(mongoose, appSchema){
	var Cliente = mongoose.model("Cliente", appSchema.clienteSchema);	
	
	this.salvarCliente = function(p_cliente, successCallback, errorCallback){
		var clienteSave = new Cliente(p_cliente);
		
		clienteSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}

module.exports.ClienteService = ClienteService;

