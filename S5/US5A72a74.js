// Funções arrow

let dobro = function (a) {
    return 2*a
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))


let ola = function () {
    return "Olá!"
}
ola = () => "Olá!"
ola = _ => "Olá!"

console.log(ola())

// uma função arrow é sempre uma função anônima
// usa o "this" de quando a função é declarada, sem variação de contexto léxico


// Funções arrow - parte II

/*
function individuo() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new individuo
*/


// Funções arrow - parte III

let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(this)
comparaComThis(global)

const obj = { }
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)

// A arrow function "tem mais força que" o .bind(), pois o "this" da
// arrow function é um "this" associado ao contexto no qual a função foi escrita
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(this)
