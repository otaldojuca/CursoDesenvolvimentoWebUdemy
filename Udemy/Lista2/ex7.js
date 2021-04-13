// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo,
// inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e 
// maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou 
// seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a 
// lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

let isBetween = (number, min, max, inclusive = false) => 
    ((inclusive && number >= min && number <= max) ||
     (!inclusive && number > min && number < max)) ? true : false

console.log(isBetween(7, -12, -5, false))
console.log(isBetween(7, 5, 70))
console.log(isBetween(7, 5, 7))
console.log(isBetween(7, 5, 7, false))
console.log(isBetween(7, 5, 7, true))
