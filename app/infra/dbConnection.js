var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/ecommerce';

function _find(query, callback){
	MongoClient.connect(url, function(err, db){
		var collection = db.collection('produtos');
		collection.find(query).toArray(function(err, docs) {
			callback(err, docs);
			db.close();
		});
	});
}


module.exports = {
	find : _find
}