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

	app.post('/produtos', function(req, res, next){
		var produto = req.body;
		req.assert('nome', 'Nome é obrigatorio').notEmpty();
		req.assert('preco', 'Valor invalido').notEmpty().isFloat();

		var erros = req.validationErrors();

		if(erros){
			res.format({
				html : function(){
					res.status(400).render('produtos/novo', {erros : erros, produto : produto});
				},
				json : function(){
					res.status(400).json({erros : erros, produto : produto});
				}
			});
			return;
		}
		var produtoDAO = new app.DAO.ProdutosDAO();
		produtoDAO.salvar(produto, function(err, result){
			if(err){
				return next(err);
			}
			console.log(result);
			app.get('io').emit('novoProduto', result);
			res.redirect('/produtos');
		});		
	});
};