// 28)

function quantidadeParImpar (array) {

    let pares = 0
    let impares = 0

    array.forEach(element => {
        
        if (element.toFixed(0) % 2 == 0) pares++
        else impares++

    })

    return `Há ${pares} pares e ${impares} ímpares.`
}

// Testes
console.log(quantidadeParImpar([3, 1, 4, 1, 5, 9, 2, 6]))
console.log(quantidadeParImpar([2, 3, 5, 7, 11, 13, 17, 19]))
