var express = require('express');
var load = require('express-load');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

module.exports = function(){

	var app = express();

	app.use(express.static('public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());

	app.use(expressValidator());
	
	load('routes', {cwd : 'app'}).then('DAO').into(app);

	return app;
};