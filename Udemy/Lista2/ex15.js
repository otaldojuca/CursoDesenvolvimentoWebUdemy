// Elabore uma função que receba um array de números e 
// retorne um array que tenha todos os números que são 
// pares e que também tenham índices pares.

let returnEven = (array) => {

    if (Array.isArray(array) == false) return "Error #001 - no array given as a parameter."

    return array.filter(function(e, i) { 
        return (e % 2 == 0 && i % 2 == 0) 
    })
}

// Tests
console.log(returnEven([1, 2, 3, 4]))
console.log(returnEven([10, 70, 22, 43]))
console.log(returnEven([14, "22", "Roland", true, 34, 56, 789, "11", "12"]))
console.log(returnEven(4))
