// 01)
// José Carlos Rodrigues Antonio
// 0040961923011

function operacoes (numA, numB) {
    console.log(`Adição: ${numA + numB}`)
    console.log(`Subtração: ${numA - numB}`)
    console.log(`Multiplicação: ${numA * numB}`)
    console.log(`Divisão: ${(numA / numB).toFixed(2)}`)
    console.log()
}

// Tests
operacoes(7, 6)
operacoes(2, 0)
operacoes(-24, 4)
