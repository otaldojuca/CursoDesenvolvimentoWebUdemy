// Elabore uma função que recebe dois parâmetros: o primeiro é um
// array de números e o segundo é um número que especifica uma quantidade
// de dígitos. Essa função deverá retornar somente aqueles números do
// array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

const selectByLength = (array, digitQuant) => {

    if (Array.isArray(array) == false) return "Error #001 - no array given as a parameter."
    if (array.length == 0)             return "Error #002 - the array is empty."
    if (typeof digitQuant != "number") return "Error #003 - the parameter is not a number."

    let arrayOutput = []

    array.forEach(e => {
        if (e.toString().split("").length == digitQuant) arrayOutput.push(e)
    })

    return arrayOutput
}

// Tests
console.log(selectByLength([8, 76, 340, 5, 1, 23], 1))
console.log(selectByLength([1, 22, 333, 4444], 2))
console.log(selectByLength(3, 1))
