const express = require('express');
const rota = express.Router();

rota.get("/panel",function (req, res){
	res.render("dashboard.html")
})

module.exports = rota;
