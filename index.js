const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const veng = require('ejs')

//bodyparser
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

//view engine ejs
app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");
app.set("views", "src/views/");
// css e js
app.use(express.static('src/public'))
app.use(favicon(__dirname + '/src/public/imagens/favicon.ico'));
//rotas
app.get("/", function(req, res){
	res.render(__dirname + "/src/views/index.html")
})
app.get("/planos", function(req, res){
	res.render(__dirname + "/src/views/planos.html")
})
app.get("/login", function(req, res){
	res.sendFile(__dirname + "/src/views/login.html")
})
app.get("/post", function(req, res){
	res.render(__dirname + "/src/views/post.html")
})
app.get("/register", function(req, res){
	res.sendFile(__dirname + "/src/views/register.html")
})
app.get("/reset", function(req, res){
	res.sendFile(__dirname + "/src/views/reset.html")
})
app.get("/contato", function(req, res){
	res.render(__dirname + "/src/views/contato.html")
})

app.get("/sobre", function(req, res){
	res.render(__dirname + "/src/views/sobre.html")
})

app.listen(7470, function(){
	console.log("rodando em http://localhost:7470")
})
