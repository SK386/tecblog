const express = require('express');
const app = express();
const handlebars = require('handlebars')
const bodyParser = require('body-parser');

//bodyparser
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

//view engine ejs
app.set("view engine", "ejs");
// css e js
app.use(express.static('src/public'))

app.get("/", function(req, res){
	res.sendFile(__dirname + "/src/views/index.html")
})
app.get("/planos", function(req, res){
	res.sendFile(__dirname + "/src/views/planos.html")
})
app.get("/login", function(req, res){
	res.sendFile(__dirname + "/src/views/login.html")
})
app.get("/post", function(req, res){
	res.sendFile(__dirname + "/src/views/post.html")
})
app.get("/register", function(req, res){
	res.sendFile(__dirname + "/src/views/register.html")
})
app.get("/reset", function(req, res){
	res.sendFile(__dirname + "/src/views/reset.html")
})
app.get("/contato", function(req, res){
	res.sendFile(__dirname + "/src/views/contato.html")
})
app.listen(7470, function(){
	console.log("rodando em http://localhost:7470")
})
