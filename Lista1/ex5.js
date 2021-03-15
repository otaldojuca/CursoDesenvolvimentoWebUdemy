// 05) 

function exibirValor (valor) {

    return `R$ ${valor.toFixed(2).replace(".", ",")}`
}

// Testes
console.log(exibirValor(2.37))
console.log(exibirValor(.123))
console.log(exibirValor(-72.1))
