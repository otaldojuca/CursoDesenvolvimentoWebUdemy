// Map - I
// cria um array com o mesmo tamanho do array base

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (element) { // os 3 parâmetros padrões são os mesmos do forEach:
    return element * 2                        // elemento, índice e array  
}) 

console.log(nums)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const transformarDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = nums.map(soma10).map(triplo).map(transformarDinheiro)
console.log(resultado)
console.log()


// Map - II
// Desafio

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 15.90 }',
    '{ "nome": "Kit de lápis", "preco": 39.99 }',
    '{ "nome": "Caneta", "preco": 1.50 }'
]

// retornar um array composto apenas pelos preços

let carrinhoOut = carrinho.map(e => JSON.parse(e)).map(e => e.preco)
console.log(carrinhoOut)


// Map - III
// Criando a função .map()

Array.prototype.map2 = function (callback) {

    const novoArray = []

    for (let count = 0; count < this.length; count++) {
        novoArray.push(callback(this[count], count, this))
    }
    return novoArray
}

let carrinhoOut2 = carrinho.map2(e => JSON.parse(e)).map2(e => e.preco)
console.log(carrinhoOut2)
