// FlatMap

const escola = [{
    nome: "Turma T1",
    alunos: [{
        nome: "Gustavo",
        nota: 8.4
    }, {
        nome: "Armando",
        nota: 7.35
    }]
}, {
    nome: "Turma T2",
    alunos: [{
        nome: "Ana",
        nota: 6.2
    }, {
        nome: "Mariana",
        nota: 4.8
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasTurma)

console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)
