var dbConnection = require("../infra/dbConnection");

module.exports = function(app){
	app.get('/produtos', function(req, res){
		dbConnection.find({}, function(err, docs){
			res.render("produtos/listagem", {lista : docs});
		});
	});
}