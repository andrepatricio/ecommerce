module.exports = function(app){
	app.get('/produtos', function(req, res){
		var produtosDAO = new app.DAO.ProdutosDAO(); 

		produtosDAO.listar(function(err, docs){
			res.render('produtos/listagem', {lista: docs});
		});
	});
};