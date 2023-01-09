const express = require('express');
const app = express();

app.get("/", function(req, res){
	res.sendfile("src/index.html")
})
app.get("/pricing", function(req, res){
	res.sendfile("src/pricing.html")
})
app.listen(7470, function(){
	console.log("rodando em http://localhost:7470")
})
