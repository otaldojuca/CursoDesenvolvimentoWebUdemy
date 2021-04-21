// Desenvolva uma função que recebe um caractere e uma string como parâmetros
// e retorne a quantidade de vezes que o caractere se repete na string. A função
// deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

const quantityChar = (char, string) => {

    if (typeof char != "string" || typeof string != "string") return "Error #001 - a parameter is not a string."
    if (char.length != 1) return "Error #002 - first parameter isn't 1 char long."

    let array = string.split("")
    let countChar = 0

    array.forEach(e => {
        if (e == char) countChar++ 
    })

    return countChar
}

// Tests
console.log(quantityChar("Semper", "Fi"))
console.log(quantityChar("F", "Filf"))
console.log(quantityChar("f", "Filf"))
console.log(quantityChar("e", "Antedeguemon"))
console.log(quantityChar("g", "History"))
console.log(quantityChar(4, "Four"))
