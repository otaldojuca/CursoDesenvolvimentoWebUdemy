// Observações sobre programar no console do navegador

// "window" é de escopo global e é praticamente 
// a mesma coisa que "this" no navegador

// já numa IDE, "window" não funciona, o que funciona é "global"

// "this" pode ser reescrito como "module.exports"

var a = 123
let b = 456
const c = 789

window.a // "123"
window.b // "undefined"
window.c // "undefined"

function f1() { return this === window }

f1() // retorna "true"
window.f1() // retorna "true"
this.f1() // retorna "true"

const f2 = () => console.log(this === window)

f2() // retorna "true"
window.f2() // dá erro
this.f2() // dá erro

let pessoa = {
    nome: "Ana",
    falar: function() {
        return `Oi! Meu nome é ${this.nome}!`
    }
}

// Sempre se deve dar um tipo à variável/constante
z = 72 // não fazer isso!
