// Evitando modificações

// Object.preventExtensions
const produto = Object.preventExtensions({ // evita que se crie posteriormente mais atributos
                                           // ao objeto, mas ainda é possível que se delete                                          
    nome: "Qualquer",
    preco: 1.99,
    tag: "Lançamento"
})

console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha" // o nome foi alterado
produto.descricao = "Borracha escolar de apagar." // o atributo NÃO foi criado
delete produto.tag // a tag foi deletada
console.log(produto)

// Object.seal
const pessoa = {

    nome: "Amanda",
    idade: 22
}

Object.seal(pessoa) // evita que se crie ou delete atributos, mas ainda é possível que se altere
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "da Cunha" // o atributo NÃO foi criado
delete pessoa.nome // o nome NÃO foi deletado
pessoa.idade = 29 // a idade foi alterada
console.log(pessoa)

// Object.freeze
const carro = {

    nome: "Lamborghini",
    modelo: "Murcielago",
    tempoUsoMeses: 13
}

Object.freeze(carro) // evita QUALQUER alteração, delete ou criação de atributo
console.log("Congelado:", Object.isFrozen(carro))

carro.nome = "Ferrari" // o nome NÃO foi alterado
carro.preco = 999999 // o atributo NÃO foi criado
delete carro.tempoUsoMeses // o atributo NÃO foi deletado
console.log(carro)
