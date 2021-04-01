// Filter - I
// retorna um array novo com base nos critérios de filtro (condição)

const produtos = [
    { nome: "Notebook", preco: 8499, fragil: true }, 
    { nome: "iPad Pro", preco: 4999, fragil: true }, 
    { nome: "Copo de vidro", preco: 1.99, fragil: true },
    { nome: "Copo de plástico", preco: 14.49, fragil: false }
]

console.log(produtos.filter(function(e) {
    return false
}))

console.log(produtos.filter(function(e) {
    return e.preco > 1000
}))

// .filter() encadeado
console.log(produtos.filter(function (e) {
    return e.preco > 1000
}).filter(function (e) {
    return e.fragil
}) )
// ou
const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))


// Filter - II
// criando a função .filter()

Array.prototype.filter2 = function (callback) {

    const newArray = []
    for (let count = 0; count < this.length; count++) {
        if (callback(this[count], count, this)) {
            newArray.push(this[count])
        }
    }
    return newArray
}

console.log(produtos.filter2(caro).filter2(fragil))
