// Variáveis "var" e "let"

// FUGIR do escopo global


// "var" só pode estar em 2 escopos: global ou de método

// Com "var"
var numero = 1
{
    var numero = 2
    console.log("Dentro: " + numero)
}
console.log("Fora: " + numero)

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log("i = " + i)

const func1 = []
for (var x = 0; x < 10; x++) {
    func1.push(function() {
        console.log(x)
    })
}
func1[2]()
func1[7]()

// "let" pode estar em 3 escopos: global, de método ou de bloco

// Com "let"
var num = 1
{
    let num = 2
    console.log("Dentro: " + numero)
}
console.log("Fora: " + numero)

for (let j = 0; j < 10; j++) {
    console.log(j)
}
// console.log("j =", j) // Erro!, 
// pois a variável "let" existe apenas no escopo local do "for"

const func2 = []
for (let y = 0; y < 10; y++) {
    func2.push(function() {
        console.log(y)
    })
}
func2[2]()
func2[7]()
