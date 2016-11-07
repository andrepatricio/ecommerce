var express = require('../config/expressConfig')();
var request = require('supertest')(express);
describe('#Rota de produtos', function(){
	it('#listar produtos json', function(done){
		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, done);		
	});

	it('#cadastrar produto com dados invalidos', function(done){
		request.post('/produtos')
				.send({nome : '', preco : 15, descricao: "descricao"})
				.expect(400, done);
	});

	it('#cadastrar produto com dados validos', function(done){
		request.post('/produtos')
				.send({nome : 'Livro novo', preco : 15, descricao: "descricao"})
				.expect(302, done);
	});
});