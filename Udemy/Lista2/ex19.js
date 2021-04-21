// Numa aplicação Web de investimento financeiro da qual você faz parte
// da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de
// calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um 
// array com uma quantidade indeterminada de números e retorne a média 
// simples desses números.

const average = (array) => {

    if (Array.isArray(array) == false) return "Error #001 - no array given as a parameter."
    if (array.length == 0)             return "Error #002 - the array is empty."

    let sum = array.reduce((accum, curr) => accum + curr)

    return (sum / array.length) 
}

// Tests
console.log(average([0, 1, 2, 3, 4]))
console.log(average([72, 57, 99, 23, 12]))
console.log(average(["Roland", 12, true]))
