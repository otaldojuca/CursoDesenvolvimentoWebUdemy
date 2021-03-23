// JSON x Objeto

const obj = {

    a: 1, b: 2, c: 3,
    soma() {
        return a + b + c
    }
}

console.log(JSON.stringify(obj)) // "soma" não é passado para a string, pois JSON é um
                                 // formato textual, então não executa procedimentos

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Erro!
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // Erro!
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "dois", "c": true, "d": [], "e": {} }'))
