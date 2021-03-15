// Tipos de declaração

console.log(soma(3, 4))
// console.log(subtracao(3, 4)) // precisa que a função seja declarada antes
// console.log(multiplicacao(3, 4)) // precisa que a função seja declarada antes

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const subtracao = function (x, y) {
    return x - y
}

// named function expression
const multiplicacao = function multiplicacao (x, y) {
    return x * y
}
