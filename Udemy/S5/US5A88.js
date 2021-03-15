// Call e Apply

function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

const produto = {
    nome: "Notebook",
    preco: 5999.99,
    desc: 0.1,
    getPreco
}
console.log(produto.getPreco())


const carro = {
    preco: 49990,
    desc: 0.05
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.02, "US$"))
console.log(getPreco.apply(carro, [0.02, "BTC"]))
