// Desenvolva uma função que receba uma string como parâmetro e retorne
// essa string somente com as consoantes, ou seja, sem as vogais.

const removeVowel = (string) => {

    if (typeof string != "string") return "Error #001 - the parameter is not a string."
    if (string.length == 0)        return "Error #002 - the string must be at least 1 char long."

    /*
    let arrayOutput = []

    string.split("").forEach(e => {

        if (e != "a" && e != "A" && e != "e" && e != "E" && 
            e != "i" && e != "I" && e != "o" && e != "O" && 
            e != "u" && e != "U") arrayOutput.push(e)

    })

    return arrayOutput.join("")
    */

    return string.replace(/[aeiouáéíóú]/gi, "")
}

// Tests
console.log(removeVowel(77))
console.log(removeVowel("Society"))
console.log(removeVowel("Antedeguemon"))
