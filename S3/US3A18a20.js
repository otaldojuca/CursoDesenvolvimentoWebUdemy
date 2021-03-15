// Variável "number"

const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.78
const avaliacao2 = 8.90

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// .toFixed() limita casas decimais
console.log(media.toFixed(2))

// .toString() torna string e/ou passa
// para número binário, hexadecimal, etc
console.log(media.toString(2))

console.log(typeof media)


// Alguns cuidados

console.log(2 / 0) // "Infinity"
console.log("12" / 2) // funciona graças à fraca tipagem
console.log("12" + 2) // não funciona, concatena devido ao char "+"
console.log("Eai?!" * 2) // "NaN"
console.log(0.1 + 0.8) // número fica exato, não em ponto flutuante
console.log(12.345.toFixed(2)) // arredonda pra cima


// Math

const raio = 7
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(4))
