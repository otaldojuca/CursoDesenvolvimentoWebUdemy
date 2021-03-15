// 04) 

function divisao (dividendo, divisor) {

    let resultado = dividendo / divisor
    let resto = dividendo % divisor

    console.log(`Divisão: ${dividendo} / ${divisor}`)
    console.log(`Resultado: ${resultado.toFixed(2)}`)
    console.log(`Resto: ${resto}`)
    console.log()

}

// Testes 
divisao(4, 2)
divisao(6, -3)
divisao(-8, -2)

divisao(0, 7)
divisao(16, 0)

divisao(7.2, 3.6)
divisao(1.2, 3)
