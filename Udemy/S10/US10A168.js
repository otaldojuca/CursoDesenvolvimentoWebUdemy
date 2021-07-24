// Promise - I

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Camila', 'Divone'])
})

p.then(primeiroElemento)
 .then(primeiroElemento)
 .then(letraMinuscula)
 .then(console.log)
