function AppSchema(mongoose){
	var Schema = mongoose.Schema;
	
	
	this.carroSchema = new Schema({
		modelo: String,
		ano: String,
		placa: String,
		cor: String,
		categoria: [{tipo: String, preco: String}],
		createdOn: {type: Date, default: Date.now}
	});
	
	this.loginSchema = new Schema({
		user: String,
		password: String,
		active: String,
		createdOn: {type: Date, default: Date.now}
	});
	
	
}

module.exports.AppSchema = AppSchema;
