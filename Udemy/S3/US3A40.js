// Notação ponto

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Esfera"
// obj1["nome"] = "Cubo" 

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.teste = function() {
        console.log("Testado!")
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")

console.log(obj2.nome)
console.log(obj3.nome)
obj3.teste()
