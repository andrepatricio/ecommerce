module.exports = function(app){
	app.get('/produtos', function(req, res){
		var produtosDAO = new app.DAO.ProdutosDAO(); 

		produtosDAO.listar(function(err, docs){
			res.format({
				html : function(){
					res.render('produtos/listagem', {lista: docs});
				},
				json : function(){
					res.json(docs);
				}
			});
			
		});
	});

	app.get('/produtos/novo', function(req, res){
		res.render('produtos/criar');
	});

	app.post('/produtos/criar', function(req, res){

		var validadorNome = req.assert('nome', 'Nome é obrigatorio');
		validadorNome.notEmpty();

		var erros = req.validationErrors();

		if(erros){
			res.render('produtos/criar');
			return;
		}

		var produtoDAO = new app.DAO.ProdutosDAO();
		produtoDAO.salvar(req.body, function(err, result){
			res.redirect('/produtos');
		});		
	});
};