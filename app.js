var app = require('./config/expressConfig')();

app.listen(3000, function(){
	console.log("servidor rodando");
});
