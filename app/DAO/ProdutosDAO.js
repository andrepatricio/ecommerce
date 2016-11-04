var dbConnection = require("../infra/dbConnection");

function ProdutosDAO(){
	this._collectionName = 'produtos';
};

ProdutosDAO.prototype.listar = function(callback){
	dbConnection.find(this._collectionName,{},function(err, docs){
		callback(err, docs);
	});
};

module.exports = function(){
	return ProdutosDAO;
};