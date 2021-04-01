// Simulando um array usando um objeto

const quaseArray = {
    0: "Ana",
    1: "Bia",
    2: "Carol"
}
console.log(quaseArray)

Object.defineProperty(quaseArray, "toString", {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[0])
console.log()

console.log(quaseArray.toString())
const meuArray = ["Ana", "Bia", "Carol"]
console.log(meuArray)
