// Revisão - I
// novas funcionalidades implementadas a partir de 2015


// let e const
{
    var a = 2
    let b = 3
}
// console.log(a, b) // não funciona, pois "b" só existe no escopo do bloco


// Template strings
const produto = "iPad"
console.log(`${produto} é caro!`)


// Destructuring
const [l, e, ...tras] = "coding"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {nome, idade: i} = {
    nome: "Ana",
    idade: "16"
}
console.log(i, nome)


///////////////////////////////////////////////////////////////////////////////////////////////////
// Revisão - II


// Arrow functions
const soma = (a, b) => a + b
console.log(soma(2, 3))

const lexico1 = _ => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()


// Parâmetros default
function log (texto = "Node.js") {
    console.log(texto)
}

log()
log("Oi!")


// Operador rest/spread
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(3, 1, 4, 1, 5, 9, 2, 6))


///////////////////////////////////////////////////////////////////////////////////////////////////
// Revisão - III


// Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.entries(obj))


// Melhorias na notação literal
const nomeObj = "Carlinha"
// antes:
const pessoa1 = {
    nomeObj: nomeObj,
    ola: function() {}
}
// depois:
const pessoa2 = {
    nomeObj,
    ola() {}
}


// Classes
class Animal {}
class Cachorro extends Animal {
    falar() {
        return "Au au!"
    }
}
console.log(new Cachorro().falar())
