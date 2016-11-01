var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/ecommerce';

module.exports = function(app){
	app.get('/produtos', function(req, res){
		MongoClient.connect(url, function(err, db){
			var collection = db.collection('produtos');
			collection.find({}).toArray(function(err, docs) {
			  res.render("produtos/listagem", {lista : docs});
			  db.close();
			});
		});
	});
}