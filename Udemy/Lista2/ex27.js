// Desenvolva uma função que recebe um objeto como parâmetro 
// e retorne um outro objeto que corresponde ao objeto recebido
// como parâmetro, porém com as posições das chaves e valores
// invertidas, conforme exemplo a seguir:

const player = {
    name: "Angelo",
    age: 23,
    country: "Colombia"
}

const invertKV = (object) => {

    Object.entries(object).forEach(([key, value]) => {

        object[value] = key
        delete object[key]
    })

    return object
}

// Tests
console.log(invertKV(4))
console.log(invertKV("three"))
console.log(invertKV(player))
