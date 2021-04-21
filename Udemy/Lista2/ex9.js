// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento
// que repetirá, enquanto que o segundo será o número de vezes que haverá
// repetição. Um array será retornado.

let repeatElement = (element, timesRepeat) => {

    if (typeof timesRepeat != "number") return "Error #001 - second parameter is not a number."

    let arrayOutput = []
    timesRepeat = Math.abs(timesRepeat)

    for (let count = 0; count < timesRepeat; count++) {
        arrayOutput[count] = element
    }

    return arrayOutput
}

// Tests
console.log(repeatElement(2, 3))
console.log(repeatElement(-2, 3))
console.log(repeatElement(2, -3))
console.log(repeatElement(4, 0))
console.log(repeatElement(5, 1))
console.log(repeatElement(5, false))
