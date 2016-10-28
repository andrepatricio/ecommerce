var dbConnection = require('../infra/dbConnection')

module.exports = function(app){
	app.get('/produtos', function(req, res){
		var connection = dbConnection();

		connection.query("select id, nome from livros", function(err, results){
			console.log(results);
			res.render('produtos/listagem', {lista : results});
		});

		connection.end();
	});
}