//carrega o módulo express
var express = require("express")

//executar o express
var app = express()

//definir o endereço da porta
var porta = 3030

//exportar as variaveis app e porta
module.exports = {app,porta}
