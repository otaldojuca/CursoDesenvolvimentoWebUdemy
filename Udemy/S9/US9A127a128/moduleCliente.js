// Toda vez que a classe terminar com "Client" significa que ela
// é uma classe que receberá outras classes

const mA = require("./moduleA") // não é preciso usar ".js" ao fim
const mB = require("./moduleB.js")

console.log(mA.ola)
console.log(mA.bemVindo)
console.log(mA.ateLogo)
console.log(mA)
console.log()
console.log(mB.bomDia)
console.log(mB.boaNoite())
console.log(mB)
