const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const veng = require('ejs')
const path = require("path")
//variaveis locais
const porta = 7470

//importando modulos locais
const db = require("./db/connection.js")
const panel_routes = require("./routes/panel.js")

//bodyparser
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

//view engine ejs
app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");
app.set("views", "src/views/");

// css e js
app.use(express.static(path.join('src/public')))
app.use(favicon(__dirname + '/src/public/imagens/favicon.ico'));

//rotas
app.get("/", function(req, res){
	res.render(__dirname + "/src/views/index.html")
})
app.get("/planos", function(req, res){
	res.render(__dirname + "/src/views/planos.html")
})
app.get("/login", function(req, res){
	res.render(__dirname + "/src/views/login.html")
})
app.get("/post", function(req, res){
	res.render(__dirname + "/src/views/post.html")
})
app.get("/register", function(req, res){
	res.render(__dirname + "/src/views/register.html")
})
app.get("/reset", function(req, res){
	res.render(__dirname + "/src/views/reset.html")
})
app.get("/contato", function(req, res){
	res.render(__dirname + "/src/views/contato.html")
})

app.get("/sobre", function(req, res){
	res.render(__dirname + "/src/views/sobre.html")
})

//post routes

app.post("/login", function(req, res){
	res.render(__dirname + "/src/views/login.html")
})

//extern routes
const panel = require(__dirname + "/routes/panel.js")
app.use("/", panel);


app.listen(porta, function(){
	console.log("rodando em http://localhost:" + porta)
})

