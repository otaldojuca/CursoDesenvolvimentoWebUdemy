// Escreva uma função que receba um array de números e retornará
// a soma de todos os números desse array

let sumArray = (array) => {

    if (Array.isArray(array) == false) return "Error #001 - no array given as a parameter."
    if (array.length == 0)             return "Error #002 - the array is empty."
    
    let sum = array.reduce((accum, curr) => accum + curr)

    return sum
}

// Tests
console.log(sumArray([0, 1, 2, 3, 4]))
console.log(sumArray([12, "12"]))
console.log(sumArray(["Alfred", 3, "Batman"]))
console.log(sumArray(7))
console.log(sumArray([]))
