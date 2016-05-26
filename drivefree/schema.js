function AppSchema(mongoose){
	var Schema = mongoose.Schema;
	
	
	this.carroSchema = new Schema({
		modelo: String,
		ano: String,
		placa: String,
		cor: String,
		tipo: String,
		preco: String,
		disponivel:String,
		createdOn: {type: Date, default: Date.now}
	});
	
	this.loginSchema = new Schema({
		user: String,
		password: String,
		active: String,
		createdOn: {type: Date, default: Date.now}
	});
	
	this.clienteSchema = new Schema({
		nome: String,
		identidade: String,
		sexo: String,
		email: String,
		senha: String,
		nHabilitacao: String,
		validade: String,
		cep: String,
		endereco: String,
		bairro: String,
		cidade: String,
		telefone: String,
		createdOn: {type: Date, default: Date.now}
	});
	
	
}

module.exports.AppSchema = AppSchema;
