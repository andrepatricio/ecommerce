var produtosDB = require('../infra/produtosDB')

module.exports = function(app){
	app.get('/produtos', function(req, res){
		produtosDB.listar(app.infra.dbConnection, function(err, docs){
			res.render('produtos/listagem', {lista: docs});
		});
	});
};