// 02)
// José Carlos Rodrigues Antonio
// 0040961923011

function exibirValor (valor) {

    return `R$ ${valor.toFixed(2).replace(".", ",")}
${valor.toLocaleString('pt-BR', {style :'currency', currency: 'BRL'})}`

}

// Tests
console.log(exibirValor(2.37))
console.log(exibirValor(.123))
console.log(exibirValor(-72.1))
