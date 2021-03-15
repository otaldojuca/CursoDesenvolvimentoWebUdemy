// Hoisting

// "Içamento"
// Consiste no comportamento da linguagem de "içar"
// variáveis de tipo "var" para o topo

console.log("a =", a)
var a = 2
console.log("a =", a)

// Como a variável é "var", é como se eu digitasse:
var b
console.log("b =", b)
b = 3
console.log("b =", b)

// Já usando "let"
// console.log("c =", c) // Erro!
let c = 4
console.log("c =", c)
