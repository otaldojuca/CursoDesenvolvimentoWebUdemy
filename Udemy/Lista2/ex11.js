// Crie uma função que receba um array e retorne o primeiro
// e o último elemento desse array como um novo array

let firstLastE = (array) => [array.shift(), array.pop()]

// Tests
console.log(firstLastE(["a", 2, "c3", "4"]))
console.log(firstLastE([72, 45, 0.1, -3]))
console.log(firstLastE(["hate", "love", "joy"]))
console.log(firstLastE([81, "x", {}, [], true]))
