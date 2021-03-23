// Herança - I

const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.prototype) // retorna "undefined"
console.log(ferrari.__proto__) // revela quem é o pai de "ferrari"
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // Object.prototype não possui pai

function meuObjeto() { }
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
