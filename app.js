const express = require('express')
const {config} = require('dotenv')
config();
const app = express()

const port = process.env.PORT || 3000;
console.log(port)

app.use(express.static('assets'))

app.get('/inicio', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/anime',function(req,res){
    res.sendFile(__dirname + "/view/animes.html")
})

app.get('/informacion',function(req,res){
    res.sendFile(__dirname + "/view/info-anime.html")
})

app.get('/sobre-anime',function(req,res){
    res.sendFile(__dirname + "/view/sobre-anime.html")
})

app.get('/autor', function(req, res){
    res.sendFile(__dirname + "/view/autor.html")
})

app.listen(port)
console.log('express esta funcionando correctamente')