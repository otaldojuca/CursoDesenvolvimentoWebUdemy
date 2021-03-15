// For In

const notas = [6.7, 7.8, 8.9, 9, 1.15]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Mariana",
    idade: 14,
    peso: 56
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
