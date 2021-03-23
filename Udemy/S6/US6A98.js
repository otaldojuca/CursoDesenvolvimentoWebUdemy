// Herança - II

// Cadeia de protótipos
Object.prototype.atr0 = "x" // NÃO FAZER!!!
const avo = { atr1: "A" }
const pai = { __proto__: avo, atr2: "B", atr3: "Cê" }
const filho = { __proto__: pai, atr3: "C" }

console.log(filho.atr0)
console.log(filho.atr1)
console.log(filho.atr2)
console.log(filho.atr3)

const carro = {

    velAtual: 0,
    velMax: 200,

    acelerarMais (delta) {
        if (this.velAtual + delta <= this.velMax) this.velAtual += delta
        else this.velAtual = this.velMax
    },

    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }

}

const ferrari = {
    modelo: "F40",
    velMax: 324 // "shadowing" (sombreamento)
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}.`
    }
}

Object.setPrototypeOf(ferrari, carro) // "ferrari" agora tem "carro" como seu protótipo (pai)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(320)
console.log(ferrari.status())
