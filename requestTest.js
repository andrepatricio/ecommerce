var http = require('http');

var config = {
	hostname : 'localhost',
	port: 3000,
	path: '/produtos',
	headers : {
		'Accept' : 'application/json'
		//Accept : 'text/html'
	}
};

http.get(config, function(res){
	res.on('data', function(body){
		console.log('Resposta: ' + body);
	});
});