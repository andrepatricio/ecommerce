var app = require('./config/expressConfig')();
require('./app/routes/produtos')(app);

app.listen(3000, function(){
	console.log("servidor rodando");
});
