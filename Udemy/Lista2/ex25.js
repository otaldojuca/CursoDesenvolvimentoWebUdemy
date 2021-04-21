// A fim de criar um mecanismo de busca para sua aplicação, você precisa
// iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, 
// como segundo parâmetro, um array de strings. A função deverá filtrar as
// palavras do array que contêm nelas a string do primeiro parâmetro.

const similarWords = (wordPart, words) => {

    if (typeof wordPart != "string" || Array.isArray(words) == false) return "Error #001 - a parameter is not a string."

    let arrayOutput = []

    words.forEach(element => {
        if (element.includes(wordPart)) arrayOutput.push(element)
    })

    return arrayOutput
}

// Tests
console.log(similarWords("el",   ["Help", "Washington", "Cascavel"]))
console.log(similarWords("nald", ["nando", "lando"]))
console.log(similarWords("as",   ["Astigmatismo", "Asma"]))
console.log(similarWords("ti",   ["Anticonstitucionalissimamente"]))
