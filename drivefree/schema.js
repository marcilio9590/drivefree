function AppSchema(mongoose){
	var Schema = mongoose.Schema;

	this.contatoSchema = new Schema({
		nome: String,
		telefones: [],
		createdOn: {type: Date, default: Date.now}
	});
}

module.exports.AppSchema = AppSchema;