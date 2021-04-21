// Criar uma função que receba uma string como parâmetro e conte
// quantas palavras tem nela.

const countWords = (string) => {

    if (typeof string != "string") return "Error #001 - the parameter is not a string."

    let array = string.split("")

    let index = []
    let countBackspace = 0

    array.forEach((e, i) => {

        if (e == " ") {
            index[countBackspace] = i
            countBackspace++
        }
    })

    let words = string.split(" ")

    return `${countBackspace + 1} words: ${words}`
}

// Tests
console.log(countWords("Good morning!"))
console.log(countWords("My name is"))
console.log(countWords(72))
