var http = require('http');

var config = {
	hostname : 'localhost',
	port: 3000,
	path: '/produtos',
	method : 'post',
	headers : {
		'Accept' : 'application/json',
		//Accept : 'text/html'
		'Content-type' : 'application/json'
	}
};

var cliente = http.request(config, function(res){
	res.on('data', function(body){
		console.log('Resposta: ' + body);
	});
});

var produto = {
	nome : 'Big Big',
	preco: '3 por 5 centavos',
	descricao: '1 real come bala a semana toda, bons tempos'
};
cliente.end(JSON.stringify(produto));
