//importar a configuração do servidor
var servidor = require("./config/servidor")

//carregar a variavel app do servidor
var app = servidor.app

//carregar a variavel porta do servidor
var porta = servidor.porta

//criar a rota para a requisicao /
app.get("/",(req,res)=>{
    res.send("O servidor está funcionando!")
})

//ligar o servidor
app.listen(porta,()=>{
    console.log("servidor em http://localhost:"+porta)
})