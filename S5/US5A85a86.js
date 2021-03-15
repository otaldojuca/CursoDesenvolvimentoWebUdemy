// Classe X função factory

// classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}
const p1 = new Pessoa ("João")
p1.falar()

// função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`${nome} é meu nome!`) 
    }
}
const p2 = criarPessoa("José")
p2.falar()

// função construtora
function Person (nome = "Fulano", sobrenome = "de Tal") {

    this.falar = function() {
        console.log(`Oi, me chamo ${nome} ${sobrenome}!`)
    }

}
const p3 = new Person ("Jonas", "Ceciliano da Rocha")
p3.falar()

// um objeto pode ser feito por meio de qualquer uma das três
