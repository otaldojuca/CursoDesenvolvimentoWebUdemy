// Crie uma função que receba um array de elementos e retorne um array 
// somente com os números presentes no array recebido como parâmetro.

let onlyNumbers = (array) => array.filter(e => typeof e == "number" )

// Tests
console.log(onlyNumbers([0, 1, 2, 3, 4]))
console.log(onlyNumbers([0, "11", 2, true, "four"]))
