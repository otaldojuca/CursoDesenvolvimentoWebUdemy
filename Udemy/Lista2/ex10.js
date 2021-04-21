// Elabore uma função que recebe um número como parâmetro e retorne 
// uma string com o símbolo "+" na quantidade especificada no parâmetro.

let repeatSymbol = (timesRepeat) => {

    if (typeof timesRepeat != "number") return "Error #001 - parameter is not a number."

    let arrayOutput = []
    timesRepeat = Math.abs(timesRepeat)
    
    for (let count = 0; count < timesRepeat; count++) {
        arrayOutput[count] = "+"
    }

    return arrayOutput.join().replace(/,/g, '')
}

// Tests
console.log(repeatSymbol(2))
console.log(repeatSymbol(-2))
console.log(repeatSymbol(5))
console.log(repeatSymbol(10))
console.log(repeatSymbol(1))
console.log(repeatSymbol(0))
