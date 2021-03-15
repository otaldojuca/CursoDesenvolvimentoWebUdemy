// Par nome e valor

// const saudacao = "Oi" // contexto léxico 1

function exec() {
    const saudacao = "Opa, beleza?" // contexto léxico 2
    return saudacao
}

const saudacao = "Salve" // contexto léxico 3

// Objetos são grupos aninhados de  pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 21,
    peso: 77,
    endereco: {
        logradouro: "Rua João das Quantas",
        numero: 13,
        bairro: "Vila Vada"
    }
}

console.log(saudacao)
console.log(exec())
console.log(saudacao)
console.log(cliente)
