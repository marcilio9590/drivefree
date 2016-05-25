function ContatoService(mongoose, appSchema){
	var Contato = mongoose.model("Contato", appSchema.contatoSchema);	
	
	this.salvarContato = function(p_contato, successCallback, errorCallback){
		var contatoSave = new Contato(p_contato);
		
		contatoSave.save(function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}

module.exports.ContatoService = ContatoService;

