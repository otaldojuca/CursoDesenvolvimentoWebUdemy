// Funções

// Função sem retorno
imprimirSoma(1, 2)
imprimirSoma(1) // "number" + "undefined" = NaN
imprimirSoma(5, 4, 3, 2, 1) // soma apenas os 2 primeiros
imprimirSoma() // "undefined" + "undefined" = NaN

function imprimirSoma(a, b){
    console.log(a + b)
}


// Função com retorno
console.log(soma(12, 20))
console.log(soma(21))

function soma(a, b = 0){
    return a + b
}


// Armazenando uma função em uma variável
const imprimirSubtracao = function (a, b){
    console.log(a - b)
}
imprimirSubtracao(5, 3)


// Armazenando uma função arrow em uma variável
const subtracao = (a, b) => {
    return a - b
}
console.log(subtracao(10, 4))


// Armazenando uma função arrow com retorno implícito
const multiplicacao = (a, b) => a * b
console.log(multiplicacao(7, 6))

const print = texto => console.log(texto)
print("Bom dia!")