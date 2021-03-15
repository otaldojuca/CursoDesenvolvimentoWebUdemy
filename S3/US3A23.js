// Boolean

let isAtivo = false

isAtivo = 1
console.log(!!isAtivo) // lê o int como boolean

// O que sempre é verdadeiro:

console.log(!!72)
console.log(!!-72)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// O que sempre é falso:

console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Uma rápida observação

console.log("" || null || 0 || "aoba" || 72) // retorna o primeiro que seja "true" da lista
