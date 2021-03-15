// String

// Pode estar entre aspas simples ou aspas duplas

const aluna = "Cecilia"

console.log(aluna.charAt(4)) // retorna o char na casa 4 (0, 1, 2, 3, 4, ...)
console.log(aluna.charAt(64)) // se não houver, não retorna nada
console.log(aluna.charCodeAt(4)) // retorna o cód. unicode do char
console.log(aluna.indexOf('e')) // retorna qual casa está o char
console.log(aluna.substring(4)) // forma uma string a partir da casa 4
console.log(aluna.substring(1,5)) // forma uma string da casa 1 a 5 (não incluída a 5)

console.log("Reprovaram a ".concat(aluna).concat(" hoje!")) // concatena frases
console.log(aluna.replace(5, "e")) // troca um char por outro (NÃO FUNCIONA)

console.log("Ana,Borges,Caleb".split(",")) // torna uma string em um array de strings


// Template strings

const nome = "Amanda"
const concat = "Olá " + nome + "!"

const ts = `
    Olá
    ${nome}!
`

console.log(concat, ts)

console.log(`1 + 1 = ${1 + 1}`)

const upper = texto => texto.toUpperCase()
console.log(`Ei você! ${upper("cuidado")}!`)