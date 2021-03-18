// Objetos - revisão
// Coleção dinâmica de pares chave-valor

const produto = new Object

produto.nome = "Cadeira"
produto["Marca do produto"] = "Madeira Madeira"
produto.preco = 79.90

console.log(produto)

delete produto.preco
delete produto["Marca do produto"]

console.log(produto)


const carro = {

    modelo: "A4",
    valor: 79990,
    proprietario: {
        nome: "João",
        idade: 14,
        endereco: {
            logradouro: "Rua Emanuel de Souza",
            numero: 226
        }
    },
    condutores: [{
        nome: "Ana",
        idade: 19
    }, {
        nome: "Mariana",
        idade: 26
    }],

    calcularValorSeguro: function() {
        // ...
    }

}

carro.proprietario.endereco.numero = 135
carro["proprietario"]["endereco"]["logradouro"] = "Av. Teresa Cristina"

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) // como "condutores" foi apagado, isso resulta
                              // "undefined"
// console.log(carro.condutores.length) // aqui no entanto, como se está tentando
                                        // alcançar um atributo de algo "undefined",
                                        // um erro será gerado
