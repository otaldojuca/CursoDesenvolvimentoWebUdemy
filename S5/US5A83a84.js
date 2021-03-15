// Função factory
// uma função que retorna um objeto

// objeto simples
const prod1 = {
    nome: "TV 43 polegadas",
    preco: 3499.99,
    codigo: "1234321"
}

// factory simples
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Mariana"
    }
}

console.log(criarPessoa())


// Função factory - pt. II

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 5499.99))
console.log(criarProduto("Geladeira", 4499.99))
