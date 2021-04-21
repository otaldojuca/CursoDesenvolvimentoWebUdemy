// Criar uma função que receba um array de números e retorne o menor 
// número desse array.

const smallestInArray = (array) => Math.min(...array)

// Tests
console.log(smallestInArray([5, 4, 1, 2, 3]))
console.log(smallestInArray([5, "4", "three", 2, false]))
console.log(smallestInArray([12, -12, 2, 22]))
