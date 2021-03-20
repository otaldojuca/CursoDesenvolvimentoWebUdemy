// Funções importantes para objetos

const pessoa = {
    nome: "Ana",
    idade: 12,
    peso: 55
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(element => {
    
    console.log(`${element[0]}: ${element[1]}`)
});
// ou ainda
Object.entries(pessoa).forEach(([chave, valor]) => {
    
    console.log(`${chave}: ${valor}`)
});


Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "03/03/2034"
})

pessoa.dataNascimento = "12/12/2012"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // se "enumerable" fosse "false", não estaria
                                 // listada a chave "dataNascimento"


const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(dest, obj)


Object.freeze(obj)
obj.c = 1234
console.log(obj) // "c" não muda, pois "freeze" fixou o objeto "obj"
