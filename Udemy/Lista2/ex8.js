// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou 
// iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador 
// de multiplicação.

let multiply = (a, b) => {

    let sum = 0

    for (count = 0; count < b; count++) {
        sum += a
    }
    
    return sum
}

console.log(multiply(6, 7))
console.log(multiply(0, 2))
console.log(multiply(8, 0))
