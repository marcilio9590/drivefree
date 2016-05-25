var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));


var mongoose = require('mongoose');
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 }
}
mongoose.connect('mongodb://10.42.3.205/drivefree', options);

var AppSchema = require('./schema.js').AppSchema;
var appSchemaInstance = new AppSchema(mongoose);

var CarroService = require('./carroService.js').CarroService;
var carroServiceInstance = 
					new CarroService(mongoose, appSchemaInstance);

//servicos
app.post('/salvarCarro', function (req, res) {
	carroServiceInstance.salvarCarro(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
