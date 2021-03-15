// Operadores: destructuring

const pessoa = {
    nome: "Laura",
    idade: 12,
    endereco: {
        logradouro: "Rua Sei lá de Quem",
        numero: 724
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, classeMedia = true } = pessoa
console.log(sobrenome, classeMedia)


// com estruturas aninhadas

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { endereco } = pessoa
console.log(endereco)


// em arrays

const [a] = [10]
console.log(a)

const [n0, , n2, , n4, n5 = 21] = [10, 9, 8, 7]
console.log(n0, n2, n4, n5)

const [ , [ , nota] ] = [ [ , 12, 13], [62, 63, 64] ]
console.log(nota)


// em funções

function rand( { min = 0, max = 1000 } ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 20, min: 10 }))
// ou
const obj = { max: 20, min: 10 }
console.log(rand(obj)) 

console.log(rand({ min: 980 })) // entre 980 e 1000
console.log(rand({})) // entre 0 e 1000
// console.log(rand()) // Erro!

function random( [ min = 0, max = 1000 ] ) {
    if (min > max) [min, max] = [max, min]
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
console.log(random([50, 40])) // inverte, e vai de 40 a 50
console.log(random([990])) // de 990 a 1000
console.log(random([, 10])) // de 0 a 10
console.log(random([])) // de 0 a 1000
// console.log(rand()) // Erro!
