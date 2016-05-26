var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var session = require('express-session');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({ secret: 'mypass', 
	saveUninitialized: false,
	resave: false,				
	cookie: { maxAge: 60000 }}));



var mongoose = require('mongoose');
var options = {
		db: { native_parser: true },
		server: { poolSize: 5 }
}
mongoose.connect('mongodb://10.42.3.205/drivefree', options);
//mongoose.connect('mongodb://localhost/drivefree', options);

var AppSchema = require('./schema.js').AppSchema;
var appSchemaInstance = new AppSchema(mongoose);

var CarroService = require('./carroService.js').CarroService;
var carroServiceInstance = 
	new CarroService(mongoose, appSchemaInstance);

var ClienteService = require('./clienteService.js').ClienteService;
var clienteServiceInstance = 
	new ClienteService(mongoose, appSchemaInstance);


//servicos
app.post('/getUser', function (req, res) {
	var obj = req.body


	carroServiceInstance.getLogin({login:obj.user, password:obj.password}, function(response){
		//res.send(response);
		//console.log(response);
		req.session.usuario = response;
		res.send(req.session.usuario);
	}, function(err){
		res.send(err);
	});
});

app.get('/sessaoConsultar', function (req, res) {
	res.send(req.session.usuario);
});

app.post('/salvarCarro', function (req, res) {
	carroServiceInstance.salvarCarro(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.post('/salvarPedido', function (req, res) {
	carroServiceInstance.salvarPedido(req.body, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});


//servico salvar cliente
app.post('/salvarCliente', function (req, res) {
	clienteServiceInstance.salvarCliente(req.body, function(response){
		req.session.cliente = response;
		res.send(req.session.cliente);
	}, function(err){
		res.send(err);
	});
});


app.get('/listaCarroA', function (req, res) {
	carroServiceInstance.listaCarroA(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get('/listaCarroB', function (req, res) {
	carroServiceInstance.listaCarroB(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get('/listaCarroC', function (req, res) {
	carroServiceInstance.listaCarroC(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get('/listaCarro', function (req, res) {
	carroServiceInstance.listaCarro(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get('/listarPedidos', function (req, res) {
	carroServiceInstance.listarPedidos(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.delete('/deletarCarro/:id', function (req, res) {
	var id = req.params.id;
	carroServiceInstance.removerCarro(id, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.put('/editarCarro', function (req, res) {
	var carro = req.body;
	carroServiceInstance.editarCarro(carro, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.put('/finalizarPedido', function (req, res) {
	var pedido = req.body;
	carroServiceInstance.finalizarPedido(pedido, function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
