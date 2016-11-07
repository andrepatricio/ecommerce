var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var _url = 'mongodb://localhost:27017/ecommerce';

var _find = function(collectionName, query, callback){	
	MongoClient.connect(_url, function(err, db){
		var collection = db.collection(collectionName);
		collection.find(query).toArray(function(err, docs) {
			callback(err, docs);
			db.close();
		});
	});
};

var _save = function(collectionName, obj, callback){
	
	MongoClient.connect(_url, function(err, db){
		var collection = db.collection(collectionName);
		collection.insertOne(obj, function(err, result){
			callback(err, result);
			db.close();
		});
	});
};

module.exports = {
	find : _find,
	save : _save
}
