// Tagged Template - I
// processa template strings dentro de funções

const { result } = require("lodash")

function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return `Outra string.`
}

const aluno = "Guilherme"
const situacao = "Aprovado"
console.log(tag `${aluno} está ${situacao}`)


// Tagged Template - II

const real = (partes, ...valores) => {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.49
const precoParcela = 15
console.log(real `1x de ${preco} ou 2x de ${precoParcela}.`)
