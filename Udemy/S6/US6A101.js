// Herança - V

console.log(typeof String, typeof Array, typeof Object)

String.prototype.reverse = function() {

    return this.split('').reverse().join('')
}
console.log(`Nubank`.reverse())

Array.prototype.first = function() {

    return this[0]
}
console.log([7, 2, 3].first())

String.prototype.toString = function() { // NUNCA sobreescrever funções que já existam!
    return `Lascou tudo`
}
console.log("Banco do Brasil".reverse())
