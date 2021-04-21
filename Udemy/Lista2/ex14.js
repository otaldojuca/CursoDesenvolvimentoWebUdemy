// Desenvolva uma função que recebe como parâmetro um objeto e
// retorne um array de arrays, em que cada elemento é um array 
// formado pelos pares chave/valor que corresponde a um atributo do objeto

const tshirt = {
    color: "red",
    size: "GG",
    company: "Deep Sea",
    yearCreated: 2020
}

let keysValues = (obj) => Object.entries(obj)

// Tests
console.log(keysValues(tshirt))
