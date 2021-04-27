// Sistema de módulos: Export

console.log(this === module.exports)
console.log(exports === module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// mesmo atribuindo "null" a exports, ele continua apontando para o que foi apontado
// nas linhas 6, 7 e 8
exports = null
console.log(module.exports)

exports = {
    nome: "teste"
}
console.log(module.exports)

module.exports = {
    publico: true
}
console.log(module.exports) // para exportar um objeto, usar sempre "module.exports"
