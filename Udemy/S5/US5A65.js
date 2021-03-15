// Funções


// Forma literal
function funct1() { }

// Armazenada em uma variável
const funct2 = function() { }

// Armazenada em um array
const array = [
    function (a, b) { return a + b }, 
    12, 
    "Olá!"
]
console.log(array[0](2, 2))

// Armazenada em um atributo de objeto
const obj = {}
obj.funct3 = function() {
    return "Opa!"
}
console.log(obj.funct3())

// Passada como parâmetro
function funct4(funct) {
    funct()
}
funct4(function () { console.log("Executado!") })

// Retornando uma função
function adicao(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

adicao(1, 2)(7)
// ou
const seteMais = adicao(7, 0)
seteMais(8)
