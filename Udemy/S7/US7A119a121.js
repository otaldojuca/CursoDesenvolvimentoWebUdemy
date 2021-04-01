// Reduce - I
// utiliza um acumulador

const alunos = [
    { nome: "Lucas", nota: 9.5, bolsista: false },
    { nome: "Pedro", nota: 6.1, bolsista: true },
    { nome: "Ana", nota: 4.75, bolsista: false },
    { nome: "Mariana", nota: 10.0, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {

    console.log(acumulador, atual)
    return acumulador + atual
}, 1.5) // acumula a partir de 1.5

console.log(`Resultado: ${resultado}`)
console.log()


// Reduce - II
// Desafios!

const alunos2 = [
    { nome: "Luara", nota: 9, bolsista: false },
    { nome: "Luana", nota: 7, bolsista: true },
    { nome: "Laura", nota: 5, bolsista: false },
    { nome: "Lua", nota: 8, bolsista: true },
]

// Desafio 1: todos os alunos são bolsistas? (retornar true ou false)
let d1 = alunos2.map(a => a.bolsista).reduce(function (acumulador, atual) {
    return acumulador && atual
})
console.log(d1)

// Desafio 2: algum aluno é bolsista? (retornar true ou false)
let d2 = alunos2.map(a => a.bolsista).reduce(function (acumulador, atual) {
    return acumulador || atual
})
console.log(d2)
console.log()


// Reduce - III

Array.prototype.reduce2 = function (callback, valorInicial) {

    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]

    for (let count = indiceInicial; count < this.length; count++) {
        acumulador = callback(acumulador, this[count], count, this)
    }

    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce2(soma))
console.log(nums.reduce2(soma, 100))
