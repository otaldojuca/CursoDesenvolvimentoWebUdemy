// Crie uma função que recebe um array de números e retorna o
// segundo maior número presente nesse array.

const secondBiggest = (array) => {

    if (Array.isArray(array) == false) return "Error #001 - no array given as a parameter."
    if (array.length == 0)             return "Error #002 - the array is empty."

    let arrayOutput = []

    array.forEach(e => {
        if (e != Math.max(...array)) arrayOutput.push(e)
    })

    return Math.max(...arrayOutput)
}

// Tests
console.log(secondBiggest(34))
console.log(secondBiggest([3, 14, 15, 92, 6]))
console.log(secondBiggest([false, "one", 2, 33, 4, 555]))
