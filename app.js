var app = require('./config/expressConfig')();

app.get('/produtos', function(req, res){
	console.log('listando');
	res.render('produtos/listagem');
});

app.listen(3000, function(){
	console.log("servidor rodando");
});
