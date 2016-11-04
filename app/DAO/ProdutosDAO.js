var dbConnection = require("../infra/dbConnection");

function ProdutosDAO(){
	this._collectionName = 'produtos';
};

ProdutosDAO.prototype.listar = function(callback){
	dbConnection.find(this._collectionName,{},function(err, docs){
		callback(err, docs);
	});
};

ProdutosDAO.prototype.salvar = function(produto, callback){
	dbConnection.save(this._collectionName, produto, function(err, result){
		callback(err, result);
	});
};

module.exports = function(){
	return ProdutosDAO;
};