module.exports = function(app){
	app.get('/', function(req, res){
		var produtosDAO = new app.DAO.ProdutosDAO();

		produtosDAO.listar(function(err, result){
			res.render('home/home', {lista : result});	
		});		
	});
};