var http = require('http');
var assert = require('assert');
describe('#Rota de produtos', function(){
	it('#listar produtos json', function(done){
		var config = {
			hostname : 'localhost',
			port: 3000,
			path: '/produtos',
			headers : {
				'Accept' : 'application/json'
			}
		};

		http.get(config, function(res){
			assert.equal(res.statusCode, 200);
			assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
			done();
		});
		
	});
});