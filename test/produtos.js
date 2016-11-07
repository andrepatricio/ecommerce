var express = require('../config/expressConfig')();
var request = require('supertest')(express);
describe('#Rota de produtos', function(){
	it('#listar produtos json', function(done){
		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, done);		
	});
});