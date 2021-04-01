// Código imperativo x declarativo

const alunos = [
    { nome: "Fulano", nota: 9.5 },
    { nome: "Beltrano", nota: 6.1 },
    { nome: "Cicrano", nota: 4.75 }
]

// Abordagem imperativa
let total1 = 0

for (let count = 0; count < alunos.length; count++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Abordagem declarativa
// MELHOR abordagem, pois permite melhor reuso de código
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
