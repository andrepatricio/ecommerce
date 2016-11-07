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
		res.render('produtos/novo', {erros : {}, produto : {}});
	});

	app.post('/produtos/criar', function(req, res){
		var produto = req.body;
		req.assert('nome', 'Nome é obrigatorio').notEmpty();
		req.assert('preco', 'Valor invalido').notEmpty().isFloat();

		var erros = req.validationErrors();

		if(erros){
			res.format({
				html : function(){
					res.render('produtos/novo', {erros : erros, produto : produto});
				},
				json : function(){
					res.json({erros : erros, produto : produto});
				}
			});
			return;
		}

		var produtoDAO = new app.DAO.ProdutosDAO();
		produtoDAO.salvar(produto, function(err, result){
			res.redirect('/produtos');
		});		
	});
};