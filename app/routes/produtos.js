module.exports = function(app){
	app.get('/produtos', function(req, res){
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'ecommerce'
		});

		connection.query("select * from livros", function(err, result){
			return res.send(result);
		});

		connection.end();
	});
}