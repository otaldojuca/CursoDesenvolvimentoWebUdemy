// Sistema de módulos: Require

// sempre digitar corretamente o nome do arquivo, inclusive com 
// distinção entre maiúsculas e minúsculas

const moduloA = require("../../../US9A127a128/moduleA") 
console.log(moduloA.ola)


// Não é preciso digitar "./folderC/index" ou "./folderC/index.js", pois
// por padrão o próprio node busca pelo .js de nome "index"
const c = require("./folderC")
console.log(c.ola)


// Digitando no Chrome "localhost:8080", dá pra ver o texto "Bom dia!" nele
const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)
