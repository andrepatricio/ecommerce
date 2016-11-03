var _collection = 'produtos';

var _listar = function(connection, callback){
	connection.find(_collection,{},function(err, docs){
		callback(err, docs);
	});
};

module.exports = {
	listar : _listar
};