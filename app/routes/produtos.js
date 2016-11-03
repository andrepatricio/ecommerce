module.exports = function(app){
	app.get('/produtos', function(req, res){
		app.infra.dbConnection.find({}, function(err, docs){
			res.render("produtos/listagem", {lista : docs});
		});
	});
}